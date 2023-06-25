import yts from 'yt-search'
import fs from 'fs'
import fetch from 'node-fetch' 
let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Sit Down Be Side Me`
	let vid = (await yts(text)).all[0]
	if (!vid) throw '⚠️️ *_Vídeo/Audio no encontrado :(._*'
try {
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid    
let texto1 = `*⊜─⌈📻 ◜YouTube Play◞ 📻⌋─⊜*

❏ 🐢 *Autor:* ${vid.author.name}
❏ 📓 *Título:* ${title}
❏ 🗓️ *Publicado:* ${ago}
❏ ⏰ *Duración:* ${timestamp}
❏ 👀 *Vistas:* ${views}
❏ 🌱 *Url:* ${url}
`
conn.sendFile(m.chat, thumbnail, 'error.jpg', texto1, m)
}catch(e){
m.reply('⚠️ *_Error, porfavor vuelva a intentarlo._*')
console.log(e)}}
handler.help = ['play', 'play2'].map(v => v + ' *<texto>*')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true
export default handler
