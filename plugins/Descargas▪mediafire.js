import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️️ *_Ingrese el link de mediafire junto al comando_*`
    if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrecto`
    
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

❏ 📓 *Nombre:* ${filename}
❏ 📁 *Tamaño:* ${filesizeH}
❏ 📄 *Extension:* ${ext}
❏ 📤 *Subido:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire *<url>*']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mfire'] 
handler.register = true

handler.limit = true

export default handler
