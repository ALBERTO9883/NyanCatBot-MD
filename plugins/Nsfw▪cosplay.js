
import db from '../lib/database.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)
if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
var {age} = global.db.data.users[m.sender]
   if (age <17) {
   m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`)
   throw false
	}
let cosp = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/cosplay?apikey=${fgapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat18, adnsfw, null, script, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•${name}*`, cosp.data, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command}`]], fakemsg)
}
handler.help = ['pack']
handler.tags = ['nsfw']
handler.command = ['pack']
handler.limit = true
handler.register = true
export default handler
