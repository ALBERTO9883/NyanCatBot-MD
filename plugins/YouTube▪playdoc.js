import yts from 'yt-search'
import fs from 'fs'
import fetch from 'node-fetch' 
let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Sit Down Be Side Me`
	let vid = (await yts(text)).all[0]
	if (!vid) throw '⚠️️ *_Vídeo/Audio no encontrado :(._*'
try {
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `.ytadoc ${url}`, buttonText: { displayText: 'Aᴜᴅɪᴏ 🎵' }, type: 1 },
{ buttonId: `.ytvdoc ${url}`, buttonText: { displayText: 'Vɪᴅᴇᴏ 🎥' }, type: 1 },
{ buttonId: `.ytgetdl ${url}`, buttonText: { displayText: 'Cᴀʟɪᴅᴀᴅᴇs📁' }, type: 1 }, ]    
let texto1 = `*⊜─⌈📻 ◜YouTube Doc.◞ 📻⌋─⊜*

❏ 🐢 *Autor:* ${vid.author.name}
❏ 📓 *Título:* ${title}
❏ 🗓️ *Publicado:* ${ago}
❏ ⏰ *Duración:* ${timestamp}
❏ 👀 *Vistas:* ${views}
`
let buttonMessage = {
"document": { url: "https://wa.me/50499698072" }, 
"fileName": botname, 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": '\n*❏ 🌿 Reproductor de YouTube©*',
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": linkgc }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}catch(e){
m.reply('⚠️ *_Error, porfavor vuelva a intentarlo._*')
console.log(e)}}
handler.help = ['playdoc *<song name>*']
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
