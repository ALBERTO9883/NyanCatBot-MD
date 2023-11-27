import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '⚠️️ *_Menciona al usuario con @user._*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '⚠️️ *_Ingrese la cantidad de -Monedas- que quiere transferir._*'
    if (isNaN(txt)) throw '🔢 *sólo números.*'
    let poin = parseInt(txt)
    let cookie = poin
    let imt = Math.ceil(poin * impuesto)
    cookie += imt
    if (cookie < 1) throw '⚠️️ *Mínimo es  1*'
    let users = global.db.data.users
    if (cookie > users[m.sender].cookie) throw '⚠️ *_Galletas insuficientes para transferir._*'
    users[m.sender].cookie -= cookie
    users[who].cookie += poin
    
    await m.reply(`⊜ *TRANSFERENCIA 🍪*
┏━━━━━━━━━━━━━⬣
┃⋄ *${-poin}* Monedas
┃⋄ Impuesto 2% : *${-imt}* Galletas
┃⋄ Total gastado: *${-cookie}* Galletas
┗━━━━━━━━━━━━━⬣`)
    conn.fakeReply(m.chat, `⊜ *_Recibiste_*\n\n *+${poin}* *_Galletas🍪._*`, who, m.text)
}
handler.help = ['paycookies *@user <cantidad>*']
handler.tags = ['xp']
handler.command = ['paycookies', 'transfercookies', 'transferck'] 
handler.rowner = false

export default handler

