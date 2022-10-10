import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '⚠️ *_Taguea al usuario_*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -XP- que quiere añadir_*'
  if (isNaN(txt)) throw ' 🔢 *_sólo números_*'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * impts)
  exp += pjk
  if (exp < 1) throw '⚠️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`⊜ *✨ XP AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${xp}
┗━━━━━━━━━━━⬣`)
 conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${xp} XP ✨_*`, who, m.text)
}

handler.help = ['addxp *<@user>*']
handler.tags = ['xp']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

