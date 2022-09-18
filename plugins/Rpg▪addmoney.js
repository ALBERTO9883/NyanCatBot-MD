import MessageType from '@adiwajshing/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '⚠️ *_Taguea al usuario_*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de ddineroque quiere añadir_*'
  if (isNaN(txt)) throw ' 🔢 *_sólo números_*'
  let pet = parseInt(txt)
  let _pet = pet
  let pjk = Math.ceil(pet * impts)
  pet += pjk
  if (pet < 1) throw '⚠️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].pet += pet

  await m.reply(`⊜ *💰 DINERO AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${pet}
┗━━━━━━━━━━━⬣`)
 conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${pet} de dinero 💵_*`, who, m.text)
}

handler.help = ['addmoney *<@user>*']
handler.tags = ['xp']
handler.command = ['addmoney'] 
handler.rowner = true

export default handler

