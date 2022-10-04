import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const q = m.quoted || m
    let mime = (q.msg || q).mimetype || ''
    if (!m.quoted) throw `*⚠️ Etiquete el video o audio que desea convertir en documento*`
    if(!text) throw `*⚠️ Ingrese el nombre de la música que desea colocar al documento.*`
    if (!/audio|video/.test(mime)) throw `⚠️ *_Responda al video o audio que desea convertir a documento con el comando :_*\n\n*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Error al descargar medios'
    m.reply('*⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳*')
    if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, { document: media, mimetype: 'video/mp4', fileName: `${text}.mp4`}, {quoted: m})
    } else if (/audio/.test(mime)) {
    return conn.sendMessage(m.chat, { document: media, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, {quoted: m})}
}
handler.help = ['document *<audio/video>*']
handler.tags = ['tools']
handler.command = ['document'] 
handler.register = true

export default handler