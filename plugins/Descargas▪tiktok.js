import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `*_⚠️ Porfavor ingrese un link/enlace de tiktok._*`
if (!args[0].match(/tiktok/gi)) throw `❎ *_Verifica que el link sea de tiktok._*`
await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Error al descargar el video'
    conn.sendFile(m.chat, url, 'tiktok.error', ``, m)
} catch {
    m.reply(`❎ Error al descargar el video`)
}
}  
handler.help = ['tiktok *<enlace>*']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true

export default handler
