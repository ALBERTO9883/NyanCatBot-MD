import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '⚠️️ *_Taguea al usuario_*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '⚠️️ *_Ingrese la cantidad de -Monedas- que quiere añadir_*'
    if (isNaN(txt)) throw '🔢 *sólo números*'
    let dmt = parseInt(txt)
    let limit = dmt
    let pjk = Math.ceil(dmt * impts)
    limit += pjk
    if (limit < 1) throw '⚠️️ Mínimo es  *1*'
    let users = global.db.data.users
   users[who].limit += dmt

    await m.reply(`⊜ *🪙 AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄ *Total:* ${dmt}
┗━━━━━━━━━━━⬣`)
   conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${dmt} Monedas 🪙_*`, who, m.text)
}

handler.help = ['addcoins *<@user>*']
handler.tags = ['xp']
handler.command = ['addcoins'] 
handler.rowner = true

export default handler

