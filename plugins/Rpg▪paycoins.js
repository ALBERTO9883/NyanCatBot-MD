import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
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
    let limit = poin
    let imt = Math.ceil(poin * impuesto)
    limit += imt
    if (limit < 1) throw '⚠️️ *Mínimo es  1*'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw '⚠️ *_Monedas insuficiente para transferir._*'
    users[m.sender].limit -= limit
    users[who].limit += poin
    
    await m.reply(`⊜ *TRANSFERENCIA 🪙*
┏━━━━━━━━━━━━━⬣
┃⋄ *${-poin}* Monedas
┃⋄ Impuesto 2% : *${-imt}* Monedas
┃⋄ Total gastado: *${-limit}* Monedas
┗━━━━━━━━━━━━━⬣`)
    conn.fakeReply(m.chat, `⊜ *_Recibiste_*\n\n *+${poin}* *_Monedas🪙._*`, who, m.text)
}
handler.help = ['paycoins *@user <cantidad>*']
handler.tags = ['xp']
handler.command = ['paycoins', 'transfercoins', 'transfercn'] 
handler.rowner = false

export default handler

