import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw `โEl grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
var {age} = global.db.data.users[m.sender]
   if (age <17) {
   m.reply(`โ Eres menor de edad! vuelve cuando tengas mรกs de 18 aรฑos`)
   throw false
	}
if (!text) throw `*_๐ Ejemplo del uso del comando ${usedPrefix + command} Con mi vecina_*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `๐ฉ๐ถ๐ฑ๐ฒ๐ผ๐ ๐ฟ๐ฒ๐น๐ฎ๐ฐ๐ถ๐ผ๐ป๐ฎ๐ฑ๐ผ๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `โกโโขโคโโฃโโโโข`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ฉ๐๐๐๐ข๐ฆ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ข๐ฆ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: 'โง sแดสแดแดแดษชแดษดแด แดsแดแด แดแดแดษชแดษด แดแดสแด แดแดsแดแดสษขแดส แดsแดแด แด ษชแดแดแด โง', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')
}}
handler.tags = ['nsfw']
handler.command = handler.help = ['porhubsearch', 'xvideossearch', 'xnxxsearch']
handler.register = true
export default handler
