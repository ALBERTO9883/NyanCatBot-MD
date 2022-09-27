import fs from 'fs'
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName(m.sender)
	
	let img = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/loli.json`)).data
  
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
await conn.sendButton(m.chat, `*✅ Aϙᴜɪ́ ᴛɪᴇɴᴇs ᴛᴜ ʟᴏʟɪ!*\n*◈•@${who.split("@s.whatsapp.net")[0]}*`, '► Cʟɪᴄᴋ ᴇɴ sɪɢᴜɪᴇɴᴛᴇ ᴘᴀʀᴀ ɪʀ ᴀ ʟᴀ sɪɢᴜɪᴇɴᴛᴇ ɪᴍᴀɢᴇɴ.', pickRandom(img), [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command}`]],fakemsg, { mentions: [who] })
}
handler.help = ['loli']
handler.tags = ['nime']
handler.command = ['loli']
handler.register = true
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
