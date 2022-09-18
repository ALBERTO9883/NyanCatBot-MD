import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.reply(m.chat, `
\t\t\t\t *「 ⏰ ESTADO AFK ⏰ 」*
 
*► Estarás afk hasta que envíes un mensaje.*

➲ *Usuario:* @${m.sender.split`@`[0]} 
➲ *Razón:* ${text ? ': ' + text : ''}
  `, m, { mentions: [m.sender]})
}
handler.help = ['afk *<razón>*']
handler.tags = ['fun']
handler.command = ['afk']
handler.register = true

export default handler
