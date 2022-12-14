import db from '../lib/database.js'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Info'
 // let biot = bio.Status(who).catch(_ => 'Sin Bio')
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { name, exp, limit, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let str = `\t\t\t\t\t*ð  | â¢  _PERFIL INFO_  â¢*

*ð¢ â¢ Nombre:* ${username}
*ð¥ â¢ Bio:* ${biot}
*ð§ â¢ Tag:* @${who.replace(/@.+/, '')}
*#â£ â¢ Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*ð â¢ Link:* wa.me/${who.split`@`[0]}
*ðª â¢ Monedas:* ${limit}
*ð â¢ Nivel:* ${level}
*â¨ â¢ Exp:* ${exp}
*ð â¢ Exp nivel:* ${user.exp - min}/${xp}
*ð§ââï¸ â¢ Rango:* ${role}
*ðªª â¢ Premium:* ${prem ? 'Si' : 'No'}
*ð¾ â¢ Ultimo claim:* ${lastclaim > 0 ? `${formatDate(lastclaim)}` : 'Ã'}

*ð â¢ Registrado:* ${registered ? 'Si': 'No'}
*ðï¸ â¢ Fecha:* ${registered ? `${formatDate(regTime)}` : 'Ã'}
*ð â¢ Hora:* ${registered ? `${formatHour(regTime)}` : 'Ã'}
*ð± â¢ Nombre:* ${registered ? `${name}` : 'Ã'}
*ð´ â¢ Edad:* ${registered ? `${age} aÃ±os` : 'Ã'}
`
  let mentionedJid = [who]
  conn.sendFile(m.chat, pp, 'Error.jpg', str, m, false, { contextInfo: { mentionedJid }})
}

handler.help = ['perfil', 'perfil *@user*']
handler.tags = ['group']
handler.command = /^(perfil|profile)$/i
handler.register = true

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}
