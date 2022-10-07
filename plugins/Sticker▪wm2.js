import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
  let isSticker = 'Etiqueta un sticker'
  if (!m.quoted) throw isSticker
  let stiker = false
  try {
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw isSticker
    let img = await m.quoted.download()
    if (!img) throw isSticker
    stiker = await addExif(img, global.packname, global.author)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
    else throw 'La conversión falló'
  }
}

handler.help = ['wm2']
handler.tags = ['sticker']
handler.command = /^(take2|robar2|wm2)$/i

export default handler
