let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `[⁉️] 𝐔𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n\n📌 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 :
${usedPrefix}𝐝𝐚𝐫𝐚𝐝𝐦𝐢𝐧 *@tag*\n${usedPrefix}𝐩𝐫𝐨𝐦𝐨𝐭𝐞 𝐑𝐞𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐫 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `⚠️ *_El número ingresado es incorrecto, por favor ingrese el número correctamente_*`, m)
	
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
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `✅ *_Ordenes realizadas._*`, m)
}}
handler.help = ['daradmin', 'promote']
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
