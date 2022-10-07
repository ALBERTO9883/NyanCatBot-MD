import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '*⚠ El sticker!*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '⚠️ *_Responde a un sticker_*'
    let img = await m.quoted.download()
    if (!img) throw '⚠ *_️Responde a un sticker!_*'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
  await conn.reply(m.chat, global.wait, m)
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
    else throw '⚠️ *_La conversión falló._*'
  }
}
handler.help = ['take *<nombre>|<autor>*']
handler.tags = ['sticker']
handler.command = ['take', 'robar', 'wm'] 

export default handler
