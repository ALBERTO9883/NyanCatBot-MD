import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `⚠️️ *_Que imagen busco?_*`
    const res = await googleImage(text)
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
    conn.sendFile(m.chat, res.getRandom(), 'image.jpg', `
✅ Resultado de : *${text}*
`.trim(), m)
}
handler.help = ['imagen *<texto>*']
handler.tags = ['img']
handler.command = ['img', 'image', 'imagen'] 
handler.limit = true 
handler.register = true

export default handler
