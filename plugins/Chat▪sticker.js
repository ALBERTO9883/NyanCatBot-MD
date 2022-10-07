//▪CÓDIGO BY ALBERTO9883 PRROS XD▪
//▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys'
import util from 'util'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, usedPrefix, isAdmin }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]
let username = conn.getName(who)
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')

if ((m.isBaileys && m.fromMe) || m.fromMe ) return true

if (chat.chatbot) {
//▪AQUÍ AGREGA LOS COMANDOS▪
let sticker1A = /Xd|xd|xD|XD/i
let sticker1B = sticker1A.exec(m.text)

let sticker2A = /nyan|cat|Nyan|Cat/i
let sticker2B = sticker2A.exec(m.text)

let sticker3A = /Gracias|gracias/i
let sticker3B = sticker3A.exec(m.text)

let sticker4A = /PEDO/i
let sticker4B = sticker4A.exec(m.text)

let sticker5A = /nay/i
let sticker5B = sticker5A.exec(m.text)

let sticker6A = /nay/i
let sticker6B = sticker6A.exec(m.text)

let sticker7A = /nay/i
let sticker7B = sticker7A.exec(m.text)

let sticker8A = /nay/i
let sticker8B = sticker8A.exec(m.text)

let sticker9A = /nay/i
let sticker9B = sticker9A.exec(m.text)

let sticker10A = /nay/i
let sticker10B = sticker10A.exec(m.text)

let sticker11A = /nay/i
let sticker11B = sticker11A.exec(m.text)

let sticker12A = /nay/i
let sticker12B = sticker12A.exec(m.text)

let sticker13A = /nay/i
let sticker13B = sticker13A.exec(m.text)

let sticker14A = /nay/i
let sticker14B = sticker14A.exec(m.text)

let sticker15A = /nay/i
let sticker15B = sticker15A.exec(m.text)

let sticker16A = /nay/i
let sticker16B = sticker16A.exec(m.text)

let sticker17A = /nay/i
let sticker17B = sticker17A.exec(m.text)

let sticker18A = /nay/i
let sticker18B = sticker18A.exec(m.text)

let sticker19A = /nay/i
let sticker19B = sticker19A.exec(m.text)

let sticker20A = /nay/i
let sticker20B = sticker20A.exec(m.text)

let sticker21A = /nay/i
let sticker21B = sticker21A.exec(m.text)

//▪AQUI AGREGA LOS DIRECTORIOS DEL STICKER A MANDAR▪
if (sticker1B) {
	let vn = './storage/stickers/xd.webp'
	conn.sendFile(m.chat, vn, 'xd.webp', null, m, true, { type: 'webpMessage', ptt: true, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `${username}`, body: ``, mediaType: 2, sourceUrl: ``, thumbnailUrl: pp}}}, { quoted: m })
	} else

if (sticker2B) {
	let emot = pickRandom(["🐢", "🌹", "🌺", "🍂"])
conn.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	} else

if (sticker3B) {
	let vn = './storage/stickers/gracias.webp'
	conn.sendFile(m.chat, vn, 'gracias.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker4B) {
	let vn = './src/webp/hola.webp'
	conn.sendFile(m.chat, vn, 'hola.webp', null, fkowner, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker5B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker6B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker7B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker8B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker9B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker10B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker11B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker12B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker13B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker14B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker15B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else

if (sticker16B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else
	
if (sticker17B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else
	
if (sticker18B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else
	
if (sticker19B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else
	
if (sticker20B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	} else
	
if (sticker21B) {
	let vn = './src/webp/bot.webp'
	conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, { type: 'webpMessage', ptt: true })
	}
}
return !0
}

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
