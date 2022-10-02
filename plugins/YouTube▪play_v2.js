import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `⚠️ *Nombre de la cancion faltante, Porfavor ingrese el nombre/titulo 𝙾 enlace de alguna cancion 𝙾 video de YouTube.*\n\n📌 *_Ejemplo :_*\n#play.1 Bangarang - Skrillex*`
try {
if (command == 'play.1') {
conn.sendNyanCat(m.chat, global.wait, adnyancat, adyoutube, null, script, m) 
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp3, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.sendNyanCat(m.chat, global.wait, adnyancat, adyoutube, null, script, m) 
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp4, 'error.mp4', `_NyanCatBot - MD_`, m)}
} catch (e) {
m.reply('*_❎ Error, Por favor vuelva a intentarlo._*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' *<texto>*')
handler.tags = ['downloader']

handler.command = ['play.1', 'play.2']

handler.register = true
export default handler
