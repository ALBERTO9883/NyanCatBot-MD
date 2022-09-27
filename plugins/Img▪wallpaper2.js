import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Harap masukkan query wallpaper yang ingin dicari.\n\nContoh: ${usedPrefix + command} Bronya Zaychik Honkai`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
    conn.sendFile(m.chat, img, 'wallpaper.jpg', wm, m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' *<texto>*')
handler.tags = ['downloader']

handler.command = /^(wallpaper2?)$/i
handler.register = true

export default handler