let handler = async (m, { conn, text}) => {
if (!text) throw '⚠️ *_Ingresa el @tag de algún usuario._*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '⚠️ *_Ingresa el @tag de algún usuario._*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `⚠️ *_El usuario @${user.split('@')[0]}, fue baneado con éxito._*`, m, { mentions: [user]})
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
