
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
	
	let asu = ["asupan", "asupan-la"]
    let asufg = asu[Math.floor(Math.random() * asu.length)]
	
	let asupan = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/${asufg}.json`)).data
	
  await conn.reply(m.chat, global.wait, m)
await conn.sendHydrated(m.chat, `✅ Aquí tiene`, `◈•${name}`, pickRandom(asupan), null, null, null, null, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command}`]], m)
}
handler.help = ['asupan']
handler.tags = ['premium']
handler.command = ['asupan']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
