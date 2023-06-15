import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*_⚠️ Ingrese el nombre de lo que desea buscar._*\n\n*• Ejemplo:* ${usedPrefix + command} Minecraft`
    const res = await (/2/.test(command) ? wallpaper : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
    conn.sendFile(m.chat, img, 'wallpaper.jpg', wm, m)
}
handler.help = ['wallpaper2']
handler.tags = ['downloader']

handler.command = /^(wallpaper2?)$/i
handler.register = true

export default handler