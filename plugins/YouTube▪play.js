import yts from 'yt-search'
import fs from 'fs'
import fetch from 'node-fetch' 
let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Sit Down Be Side Me`
	let vid = (await yts(text)).all[0]
	if (!vid) throw '⚠️️ *_Vídeo/Audio no encontrado :(._*'
try {
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid    
let texto1 = `
❏ 🐢 *Autor:* ${vid.author.name}
❏ 📓 *Título:* ${title}
❏ 🗓️ *Publicado:* ${ago}
❏ ⏰ *Duración:* ${timestamp}
❏ 👀 *Vistas:* ${views}
❏ 🌱 *Url:* ${url}`
let buttonMessage= {
'document': { url: `https://github.com/ALBERTO9883` },
'mimetype': `application/pdf`,
'fileName': `⊜─⌈📻 ◜YouTube Play◞ 📻⌋─⊜`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': null,
'body': null,
'thumbnail': await (await fetch(thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': texto1,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}catch(e){
m.reply('⚠️ *_Error, porfavor vuelva a intentarlo._*')
console.log(e)}}
handler.help = ['play', 'play2'].map(v => v + ' *<texto>*')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true
export default handler
