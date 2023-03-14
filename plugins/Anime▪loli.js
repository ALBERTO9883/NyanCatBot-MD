import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let name = await conn.getName(m.sender)

    let loli = await conn.getFile('https://api.akuari.my.id/randomimganime/loli')

    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
    await conn.sendButton(m.chat, `*_Aϙᴜɪ́ ᴛɪᴇɴᴇs ᴛᴜ ʟᴏʟɪ🎋!_*\n*◈•@${who.split("@s.whatsapp.net")[0]}*`, '► Cʟɪᴄᴋ ᴇɴ sɪɢᴜɪᴇɴᴛᴇ ᴘᴀʀᴀ ɪʀ ᴀ ʟᴀ sɪɢᴜɪᴇɴᴛᴇ ɪᴍᴀɢᴇɴ.', loli.data, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `${usedPrefix + command}`]],fakemsg, { mentions: [who] })
}
handler.help = ['loli']
handler.tags = ['nime']
handler.command = ['loli']
handler.register = true
handler.premium = false
handler.limit = true

export default handler