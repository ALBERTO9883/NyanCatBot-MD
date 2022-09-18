import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image

let json = await fetch(`https://dhn-api.herokuapp.com/api/search/whatsapp-group?query=${text}&apikey=4709b3d201416e985351`)
let jsons = await json.json()
let caption = `*⊜ RESULTADOS🔎*\n`
for (let x of jsons.result) {
caption += `
*• 🏷 Nombre:* ${x.data_title}
*• 🔗 Link:* _${x.data_url}_\n───
`}
await conn.reply(m.chat, caption, m)}
handler.tags = ['search']
handler.command = handler.help = ['groupsearch']
handler.register = true
export default handler
