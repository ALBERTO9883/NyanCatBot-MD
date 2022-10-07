import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `⚠️ *_Responde a un sticker con :_*\n\n *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*✅ Aquí tienes ฅ^•ﻌ•^ฅ⚘*', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
}
handler.help = ['toimg2 *<sticker>*']
handler.tags = ['sticker']
handler.command = ['toimg2', 'jpg2', 'aimg2'] 

export default handler
