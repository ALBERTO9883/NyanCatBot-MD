let handler = async (m, { conn, text}) => {
if (!text) throw '⚠️ *_Ingresa el @tag de algún usuario._*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '⚠️ *_Ingresa el @tag de algún usuario._*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `⚠️ *_El usuario @${who.split('@')[0]} fue desbaneado con éxito._*`, fgclink, { mentions: [who] })
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
