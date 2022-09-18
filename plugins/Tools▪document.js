import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!text) throw `*⚠️ Ingrese el nombre de la música que desea colocar al documento.*`
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a documento con el comando :\n\n*${usedPrefix + command}*`
    m.reply('*⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳*')
    let media = await q.download?.()
    if (!media) throw '❎ Error al descargar medios'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ Error al convertir'
    conn.sendMessage(m.chat, { document: audio.data, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, {quoted: m})
}
handler.help = ['document *<audio/video>*']
handler.tags = ['tools']
handler.command = ['document'] 
handler.register = true

export default handler