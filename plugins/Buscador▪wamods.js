//By ALBERTO9883 +50499698072
import translate from 'translate-google-api'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*`

let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let json = await fetch(`https://zenzapis.xyz/searching/wamods?query=${text}&apikey=${apikey}`)
let jsons = await json.json()

let res = jsons.result.map((v, index) => `*🌼 • Resultado:* ${1 + index}\n*🌺 • Nombre:* ${v.apk_name}\n*🍀 • Url:* ${v.apk_url}\n*💐 • Desc:* ${v.apk_desc}`).join`\n\n───\n\n`
await conn.reply(m.chat, res, m)}

handler.tags = ['search']
handler.command = handler.help = ['wamod']
export default handler
handler.register = true
global.keysxxx = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
