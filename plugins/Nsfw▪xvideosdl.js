import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
var {age} = global.db.data.users[m.sender]
   if (age <17) {
   m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`)
   throw false
	}
if (!args[0]) throw `*⚠️ *_Ingrese un enlace valido de XNXX_*\n📌 *Ejemplo:* ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '⚠️ *_Su video se esta procesando,espere un momento._*\n\n*El tiemoo de envío depende el peso o duracion del video*', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*⚠️ *_Error, Por favor vuelva a intentarlo_*\n\n*Verifique que el enlace sea similar a:*\n*▪ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*')
}}
handler.tags = ['nsfw']
handler.command = handler.help = ['xvideosdl']
handler.register = true
export default handler
