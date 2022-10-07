import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {   
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `⚠️ *_Etiquete o mencione a alguien._*\n\n*📌 Ejemplo* : ${usedPrefix + command} @tag` 
    
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `${name2} le dio besos a`, `${name}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
} catch (e) { }}
handler.help = ['kiss *<@user>*']
handler.tags = ['sticker']
handler.command = /^(kiss|skiss|kis|besos|beso)$/i
export default handler
