import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*`

let img = await (await fetch('https://telegra.ph/file/2df89bd87eae9e3173635.jpg')).buffer()
let json = await fetch(`https://api.lolhuman.xyz/api/groupwhatsapp?apikey=${lolkeysapi}&query=${text}`)
let jsons = await json.json()
let res = Object.values(jsons.result).map(v => v)
if (!res.length) return m.reply('⚠️ *_No se encontraron resultados, intente con otro nombre._*').then(_ => m.react('✖️'))
let txt = `*⊜ RESULTADOS🔎*`
for (let i = 0; i < (15 <= res.length ? 15 : res.length); i++) {
   txt += `\n\n`
   txt += `	⤿  *Nro* : ${1+i}\n`
   txt += `	⤿  *Nombre* : ${res[i].title}\n`
   txt += `	⤿  *Link* : ${res[i].link}\n`
}
conn.sendNyanCat(m.chat, txt, img, botname, null, script, m)
}
handler.tags = ['search']
handler.command = handler.help = ['groupsearch']
handler.register = true
export default handler
