//▪CÓDIGO BY ALBERTO9883 PRROS XD▪
//▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys'
import util from 'util'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, usedPrefix }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]

if ((m.isBaileys && m.fromMe) || m.fromMe ) return true

if (chat.chatbot) {
//━━━━━━━━◜🌾Textos🌾◞━━━━━━━━
let audio1A = /mujer|Mujer|wom|Wom/i
let audio1B = audio1A.exec(m.text)

let audio2A = /Hello|hello/i
let audio2B = audio2A.exec(m.text)

let audio3A = /vladimir|Vladimir/i
let audio3B = audio3A.exec(m.text)

let audio4A = /lsisjdjdjdj/i
let audio4B = audio4A.exec(m.text)
//━━━━━━━━━━━━━━━━━━━━━━━


//━━━━━━━◜🍁Respuestas🍁◞━━━━━━━
if (audio1B) {
	let vn = './storage/mp3/women.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imgmenu, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
       
if (audio2B) {
	let vn = './storage/mp3/hola.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendFile(m.chat, vn, 'hola.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else
	
	if (audio3B) {
	let vn = './storage/mp3/vladimir.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendFile(m.chat, vn, 'vladimir.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else
	
	if (audio4B) {
	let vn = './storage/mp3/vladimir.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendFile(m.chat, vn, 'vladimir.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} 
//━━━━━━━━━━━━━━━━━━━━━━━
}
return !0

}

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
