import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `⚠️️ *_Responde a un sticker con :_*\n\n *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    await conn.reply(m.chat, global.wait, m)
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*✅ Aquí tienes ฅ^•ﻌ•^ฅ⚘*', m)
}
handler.help = ['toimg *<sticker>*']
handler.tags = ['sticker']
handler.command = ['toimg', 'jpg', 'aimg'] 

export default handler
