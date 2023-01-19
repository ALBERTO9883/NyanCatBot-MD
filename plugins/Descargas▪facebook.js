import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, args }) => {

if (command == 'facebook') {
if (!text) throw `⚠️ *_Ingrese el link o enlace de Facebook._*`
await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${text}`)
let json = await res.json()
let { result } = json
conn.sendFile(m.chat, result, 'error.mp4', `*Aquí tiene su video de Facebook. ฅ^•ﻌ•^ฅ⚘*`, m)}
if (command == 'facebook2') {
if (!text) throw `⚠️ *_Ingrese el link o enlace de Facebook._*`
await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
let res = await fetch(`https://api.lolhuman.xyz/api/facebook2?apikey=BrunoSobrino&url=${text}`)
let json = await res.json()
let { result } = json
conn.sendFile(m.chat, result, 'error.mp4', `*Aquí tiene su video de Facebook. ฅ^•ﻌ•^ฅ⚘*`, m)}
}
handler.tags = ['downloader']
handler.command = handler.help = ['facebook', 'facebook2']
handler.register = true

export default handler
