import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let url = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    await conn.reply(m.chat, global.wait, m)
    await conn.sendFile(m.chat, url, 'profile.jpg', `@${who.split`@`[0]}`, m, null, { mentions: [who]})
}
handler.command = /^(get(pp|profile))$/i
handler.help = ['getprofile *<@tag>*']
handler.tags = ['tools']
export default handler