// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw '*Que tamaño de anchura pongo?*'
	if (!toheight) throw '*Cuánto de largo pongo?*'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `⚠️ *_Recuerde etiquetar una imágen._*\n*📌 Ejemplo:* ${usedPrefix + command} 400 400`

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `⚠️ *_El archivo ${mime} no es compatible._*`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*🌿 COMPRESIÓN DE RESIZE 🌿*

*🌺 | ANTES*
❏ Ancho : ${size.before.width}
❏ Altura : ${size.before.height}

*🫐 | DESPUÉS*
❏ Ancho : ${size.after.width}
❏ Altura : ${size.after.height}

*🔗 | LINK*
❏ Original : ${link}
❏ Comprimido : ${linkcompres}`, m)
}
handler.help = ['resize *<ancho> <altura> <foto>*']
handler.tags = ['tools']
handler.command = /^(resize)$/i

export default handler
