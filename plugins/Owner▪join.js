import db from '../lib/database.js'
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
	
	if (!text) throw `[🚨] 𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐞𝐧𝐯𝐢𝐚 𝐞𝐥 𝐥𝐢𝐧𝐤 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨\n\n📌 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 *${usedPrefix + command}* https://chat.whatsapp.com/IO9jmpI72ejHiN4unRZleU`
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw '[🚨] 𝐄𝐫𝐫𝐨𝐫, 𝐄𝐬𝐭𝐞 𝐥𝐢𝐧𝐤 𝐞𝐬 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨 𝐨 𝐧𝐨 𝐟𝐮𝐞 𝐫𝐞𝐜𝐨𝐧𝐨𝐜𝐢𝐝𝐨'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`[🐺] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐋𝐨𝐛𝐨-𝐁𝐨𝐭-𝐌𝐃 𝐬𝐞 𝐮𝐧𝐢𝐨 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨 ${res}${expired ? ` 𝐃𝐮𝐫𝐚𝐧𝐭𝐞 ${expired} 𝐝𝐢𝐚𝐬_*` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join *<link>*']
handler.tags = ['owner']

handler.command = ['join', 'entrabot'] 

//handler.premium = true
handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
