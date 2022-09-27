import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName(m.sender)
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw '❎ Error'
  await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
  conn.sendButton(m.chat, '*✅ Aϙᴜɪ́ ᴛɪᴇɴᴇs*', `*◈•@${who.split("@s.whatsapp.net")[0]}*`, json.url, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command }`]], fakemsg, { mentions: [who] })
}
handler.help = ['neko']
handler.tags = ['nime']
handler.command = ['neko']
handler.register = true
handler.limit = true

export default handler
