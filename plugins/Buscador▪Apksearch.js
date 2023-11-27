import fetch from 'node-fetch'
import fs from 'fs'

let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
//try {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*\n_📌 Ejemplo:_ *${ prefix + command}* WhatsApp`
let sfoto = fs.readFileSync('./storage/image/apksearch.png')

let json = await fetch(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
let jsons = await json.json()
let res = Object.values(jsons.respon).map(v => v)
if (!res.length) return m.reply('⚠️ *_No se encontraron resultados, intente con otro nombre._*').then(_ => m.react('✖️'))
let txt = `*⊜ RESULTADOS🔎*`
for (let i = 0; i < (15 <= res.length ? 15 : res.length); i++) {
   txt += `\n`
   txt += `	⤿  *Nro* : ${1+i}\n`
   txt += `	⤿  *Nombre* : ${res[i].title}\n`
   txt += `	⤿  *Link* : ${res[i].link}\n`
   txt += `	⤿  *Actualizado* : ${res[i].update}\n`
}
conn.sendNyanCat(m.chat, txt, sfoto, botname, null, script, m)

}    
handler.command = ['searchapk', 'apksearch']
export default handler