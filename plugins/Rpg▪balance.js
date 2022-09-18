import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
  let name = conn.getName(who) 
    m.reply(`
┏━⊜ *BALANCE* 
┃⋄ *Nombre* : ${name}
┃⋄ *Monedas* : *${global.db.data.users[who].limit}*
┗━━━━━━━━━━━━━⬣

• *NOTA :* 
*_Puedes comprar 🪙 Monedas usando los comandos_*
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'monedas', 'coins', 'balance'] 
export default handler
