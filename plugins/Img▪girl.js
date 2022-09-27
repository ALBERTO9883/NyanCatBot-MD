
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let girl = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/girl.json`)).data
  
//await conn.sendFile(m.chat, pickRandom(girl), 'girl.jpg', ✅ Resultado 🤭', m)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
await conn.sendButton(m.chat, '✅ Resultado :3', '• Click en siguiente para ir a la siguiente imagen', pickRandom(girl), [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command}`]], fakemsg)
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
