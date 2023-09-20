let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `[⁉️] 𝐔𝐬𝐮 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n\n📌 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 :
${usedPrefix}𝐪𝐮𝐢𝐭𝐚𝐫𝐚𝐝𝐦𝐢𝐧 *@tag*\n${usedPrefix}𝐝𝐞𝐦𝐨𝐭𝐞 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐫 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `[🚫] 𝐄𝐋 𝐧𝐮𝐦𝐞𝐫𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐝𝐨 𝐞𝐬 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨, 𝐢𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧𝐨 𝐯𝐚𝐥𝐢𝐝𝐨`, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, `[↪️] 𝐲𝐚 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨`, m)
}}
handler.help = ['*quitaradmin*'].m
handler.tags = ['group']
handler.command = /^(demote|quitarpoder|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
