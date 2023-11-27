import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '⚠️️ *_Taguea al usuario_*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '⚠️️ *_Ingrese la cantidad de -Galletas- que quiere añadir_*'
    if (isNaN(txt)) throw '🔢 *sólo números*'
    let dmt = parseInt(txt)
    let cookie = dmt
    let pjk = Math.ceil(dmt * impts)
    cookie += pjk
    if (cookie < 1) throw '⚠️️ Mínimo es  *1*'
    let users = global.db.data.users
   users[who].cookie += dmt

    await m.reply(`⊜ *🍪 AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄ *Total:* ${dmt}
┗━━━━━━━━━━━⬣`)
   conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${dmt} Galletas 🍪_*`, who, m.text)
}

handler.help = ['addcookies *<@user>*']
handler.tags = ['xp']
handler.command = ['addcookies', 'addcookie'] 
handler.rowner = true

export default handler

