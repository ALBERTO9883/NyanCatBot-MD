import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*_⚠️ Ingrese el nombre de lo que desea buscar._*\n\n*• Ejemplo:* ${usedPrefix + command} Minecraft`
    const res = await (/2/.test(command) ? wallpaper : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
    conn.sendFile(m.chat, img, 'wallpaper.jpg', null, m)
}
handler.help = ['wallpaper']
handler.tags = ['downloader']

handler.command = ['wallpaper', 'wallpapers', 'wp']
handler.register = true

export default handler