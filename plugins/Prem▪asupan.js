
import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
	
	let asupan = await conn.getFile('https://api.akuari.my.id/asupan/tiktok')
	
  await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${m.sender.split`@`[0]}*`, asupan.data, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], fakemsg, { mentions: [m.sender]})
}
handler.help = ['asupan']
handler.tags = ['premium']
handler.command = ['asupan']
handler.premium = true
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
