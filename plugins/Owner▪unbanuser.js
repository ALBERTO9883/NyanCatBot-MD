let handler = async (m, { conn, text}) => {
if (!text) throw '[⛔],𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @tag 𝐝𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '[⛔],𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 @tag 𝐝𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `[➡️] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 @${who.split('@')[0]} 𝐅𝐮𝐞 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨, 𝐲𝐚 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐋𝐨𝐛𝐨-𝐁𝐨𝐭-𝐌𝐃.`, fgclink, { mentions: [who] })
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
