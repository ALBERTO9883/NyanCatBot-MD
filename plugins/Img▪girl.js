import fetch from 'node-fetch'
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let girl = await conn.getFile(`https://api-fgmods.ddns.net/api/girl?apikey=${fgapikey}`)
  

await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
await conn.sendButton(m.chat, '✅ Resultado :3', '• Click en siguiente para ir a la siguiente imagen', girl.data, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command}`]], fakemsg)
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman']
handler.register = true
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
