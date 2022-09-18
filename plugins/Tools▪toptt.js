import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*「⚠️ Responda el audio que desea convertir a nota de voz con ⚠️」*\n *${usedPrefix + command}*`
    m.reply('*⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳*')
    let media = await q.download?.()
    if (!media) throw '❎ Eʀʀᴏʀ ᴀʟ ᴅᴇsᴄᴀʀɢᴀʀ ᴍᴇᴅɪᴏs'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Eʀʀᴏʀ ᴀʟ ᴄᴏɴᴠᴇʀᴛɪʀ'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', estiloaudio, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn']
handler.tags = ['tools']

handler.command = ['toav', 'tovn'] 
handler.register = true

export default handler