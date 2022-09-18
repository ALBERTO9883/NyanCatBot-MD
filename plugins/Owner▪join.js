import db from '../lib/database.js'
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
	
	if (!text) throw `⚠️️ *_Envie el link de tu Grupo_*\n\n📌 *_Ejemplo_* *${usedPrefix + command}* https://chat.whatsapp.com/IO9jmpI72ejHiN4unRZleU`
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw '⚠️Link invalido'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`*_✅ Me uní correctamente al grupo ${res}${expired ? ` Durante ${expired} días_*` : ''}`)
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
