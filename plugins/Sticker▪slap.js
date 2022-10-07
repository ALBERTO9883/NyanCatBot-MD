import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
     if (!who) throw `⚠️ *_Etiqueta o menciona a alguien._*\n\n*📌 Ejemplo* : ${usedPrefix + command} @tag`
     
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 

  let rki = await fetch(`https://api.waifu.pics/sfw/slap`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let { url } = jkis
   let stiker = await sticker(null, url, `${name2} le dio una bofetada a`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
   
}

handler.help = ['slap @tag']
handler.tags = ['rnime']
handler.command = /^(slap|bofetada)$/i
handler.diamond = true
handler.group = true

export default handler
