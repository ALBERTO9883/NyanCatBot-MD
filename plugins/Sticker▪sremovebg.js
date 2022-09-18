import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=85faf717d0545d14074659ad&img=${url}`) 
let stickerr = await sticker(false, sremovebg, global.packname, global.author)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*⚠️ Ocurrio un error inesperado, recuerda etiquetal la imagen para convertir a sticker sin fondo*')
}}
handler.help = ['sremovebg *<imagen>*']
handler.tags = ['sticker']
handler.command = /^sremovebg|removebg$/i
export default handler
