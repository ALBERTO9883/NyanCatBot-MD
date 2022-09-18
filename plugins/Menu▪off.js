/*import fs from 'fs'
import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'Menús📒',
  'info': 'Información👨‍💻',
  'search': 'Busquedas🔎',
  'game': 'Juegos🕹️',
  'xp': 'Nivel Y RPG🎯',
  'rg': 'Registro🗃️',
  'sticker': 'Sticker🏞️',
  'frases': 'Frases🥀',
   'img': 'Imágenes🪴',
  'group': 'Grupo👻',
  'logo': 'Maker Y Logos📝',
  'nable': 'Des/Activar opciones⚙️', 
  'premium': 'Premium🪪',
  'nime': 'Anime㊗',
  'downloader': 'Descargas📥',
  'tools': 'Herramientas🧰',
  'fun': 'Diversión🎭',
  'database': 'Base de Datos🗄️',
  'nsfw': 'Nsfw🔞', 
  'owner': 'Creador📌', 
  'advanced': 'Avanzado🖥️',
  'audio': 'Efecto de Audios🔊', 
}
const defaultMenu = {
  before: `
*┏━「🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ-MD🍁⃨፝⃕✰」━⊜*
┃⋄ 🕒 *Hora*: %time
┃⋄ 🗓 *Fecha*: %date
┃⋄ 📅 *Día*: %week
┗━━◘

┏━━⊜ *_INFO USER_* ━⊜
┃⋄ 📇 *Nombre*:  %name
┃⋄ 🪙 *Monedas*: %limit
┃⋄ 📊 *Nivel*: %level (%exp / %maxexp) 
┃⋄ ✨ *Exp*: %totalexp
┃⋄ 📍 *Rol*: %role
┃⋄ 🪪 *Premium*: ${global.prem ? '✅' : '❌'}
┗━━◘

┏━━⊜ *_INFO BOT_* ━⊜
┃⋄ 👤 *Autor*: ALBERTO9883
┃⋄ 💻 *Versión*: %version
┃⋄ 📊 *Usuarios*: %totalreg
┃⋄ 🗃️ *Lib*: Baileys-MD
┃⋄ 🧪 *Modo:* ${global.opts['self'] ? 'Privado': 'Público'}
┃⋄ 📈 *Tiempo Activo*: %uptime
┗━━◘
%readmore
┏━━━━━━━━━━━━━━┓
┃⋄ *_Características del Menú_*
┃
┃ •🪪 = *_Premium_*
┃ •🪙 = *_Monedas_*
┗━━━━━━━━━━━━━━┛\n
  ≡ \`\`\`LISTA DE MENUS\`\`\`
`.trimStart(),
  header: '*┏━⊜「 %category 」*',
  body: '*┃›* %cmd %islimit %isPremium',
  footer: '*┗━⬣*\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true 
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(🪙)' : '')
                .replace(/%isPremium/g, menu.premium ? '(🪪)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    

  //const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let tumbv = fs.readFileSync('./storage/mp4/menu.mp4')
    
  await conn.sendButton(m.chat, text.trim(), `*${saludo}*`, imgmenu, [['Iɴғᴏ📌', '.infobot'], ['Cʀᴇᴀᴅᴏʀ🐢', '.owner']], false, { quoted: m, contextInfo: { mentions: [who], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: '', title: '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', body: ignyc, thumbnail: miniurl, sourceUrl: global.linkgc }}})
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['help', 'menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Que tengas una linda noche 🌙`; break;
                case 1: waktoonyabro = `Que tengas una linda noche 💤`; break;
                case 2: waktoonyabro = `Que tengas una linda noche 🦉`; break;
                case 3: waktoonyabro = `Que tengas una linda mañana ✨`; break;
                case 4: waktoonyabro = `Que tengas una linda mañana 💫`; break;
                case 5: waktoonyabro = `Que tengas una linda mañana 🌅`; break;
                case 6: waktoonyabro = `Que tengas una linda mañana 🌄`; break;
                case 7: waktoonyabro = `Que tengas una linda mañana 🌅`; break;
                case 8: waktoonyabro = `Que tengas una linda mañana 💫`; break;
                case 9: waktoonyabro = `Que tengas una linda mañana ✨`; break;
                case 10: waktoonyabro = `Que tengas un lindo dia 🌞`; break;
                case 11: waktoonyabro = `Que tengas un lindo dia 🌨`; break;
                case 12: waktoonyabro = `Que tengas un lindo dia ❄`; break;
                case 13: waktoonyabro = `Que tengas un lindo dia 🌤`; break;
                case 14: waktoonyabro = `Que tengas una linda tarde 🌇`; break;
                case 15: waktoonyabro = `Que tengas una linda tarde 🥀`; break;
                case 16: waktoonyabro = `Que tengas una linda tarde 🌹`; break;
                case 17: waktoonyabro = `Que tengas una linda tarde 🌆`; break;
                case 18: waktoonyabro = `Que tengas una linda noche 🌙`; break;
                case 19: waktoonyabro = `Que tengas una linda noche 🌃`; break;
                case 20: waktoonyabro = `Que tengas una linda noche 🌌`; break;
                case 21: waktoonyabro = `Que tengas una linda noche 🌃`; break;
                case 22: waktoonyabro = `Que tengas una linda noche 🌙`; break;
                case 23: waktoonyabro = `Que tengas una linda noche 🌃`; break;
            }
            var saludo = "" + waktoonyabro;
*/