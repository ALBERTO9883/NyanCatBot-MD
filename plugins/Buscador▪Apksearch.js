//By ALBERTO9883 +50499698072

import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image

let json = await fetch(`https://api-reysekha.herokuapp.com/api/download/apk?query=${text}&apikey=APIKEY`)
let jsons = await json.json()
let caption = `*⊜ RESULTADOS🔎*\n`
for (let x of jsons.result) {
caption += `
*• 🏷 Nombre:* *_${x.name}_*
*• 🔗 Url:* _${x.url}_
*• 📥 Linkdl:* _${x.dl_url}_
*• 📋 Desc:* _${x.desc}_\n───
`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}

handler.tags = ['search']
handler.command = handler.help = ['apksearch']
handler.register = true
export default handler
