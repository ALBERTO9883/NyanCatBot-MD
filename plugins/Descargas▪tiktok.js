import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `*_⚠️ Porfavor ingrese un link/enlace de tiktok._*`
if (!args[0].match(/tiktok/gi)) throw `❎ *_Verifica que el link sea de tiktok._*`
await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
try {
    let p = await fg.tiktok(args[0]) 
    let te = `*Aqui tiene ฅ^•ﻌ•^ฅ⚘*`
    conn.sendButton(m.chat, te, wm, p.nowm, [['⎘ Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['♫ Audio', `${usedPrefix}tomp3`]], m)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Error al descargar el video'
    conn.sendButton(m.chat, `*Aqui tiene ฅ^•ﻌ•^ฅ⚘*`, wm, url, [['♫ Audio', `${usedPrefix}tomp3`]], m)
} catch {
    m.reply(`❎ Error al descargar el video`)
}
} 
    
}  
handler.help = ['tiktok *<link tt>*']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true

export default handler
