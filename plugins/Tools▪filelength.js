import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '⚠️️ *_Responde a una imagen._*'
if (!text) throw '⚠️️ *_Ingrese el peso nuevo de la imágen._*'
  if (isNaN(text)) throw ' 🔢 *_sólo números_*'
if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw `⚠️️ *Formato no soportado*`
let img = await q.download()
let url = await uploadImage(img)

if (/image\/(jpe?g|png)/.test(mime)) {
conn.sendMessage(m.chat, { image: {url: url}, caption: `Aqui tienes`, fileLength: `${text}`, mentions: [m.sender] }, { ephemeralExpiration: 24*3600, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: botname,
body: me,
mediaType: 2, 
sourceUrl: script,
thumbnail: imgmenu}}}, { quoted: m })
} else if (/video/.test(mime)) {
return conn.sendMessage(m.chat, { video: {url: url}, caption: `Aqui tienes`, fileLength: `${text}`, mentions: [m.sender] }, { ephemeralExpiration: 24*3600, quoted: m })}
}
handler.tags = ['tools']
handler.help = ['tamaño *<cantidad>*']
handler.command = /^(length|filelength|edittamaño|totamaño|tamaño)$/i
export default handler