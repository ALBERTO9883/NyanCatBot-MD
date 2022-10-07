import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text, command }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `

┏━⊜ *EFECTOS*
${effects.map(effect => `┃⋄ ${effect}`).join('\n')}
┗━━━━━━━━━━━⬣

📌 *_Ejemplo:_* 
${usedPrefix + command} wasted 
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '⚠️️ *_Responde a una imagen._*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `⚠️️ *Formato no soportado*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m) 
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
} catch (e) {
m.reply('*_Error de conversión a sticker, se envía como imagen en su lugar_*')
await conn.sendFile(m.chat, apiUrl, 'smaker.png', null, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
}}
handler.help = ['smaker']
handler.tags = ['sticker']
handler.command = ['stickmaker', 'stickermaker', 'smaker'] 
handler.limit = true

export default handler
