let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
await conn.reply(m.chat, global.wait, m)
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/simpcard', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*¡¡Toma simp muajajaja!!*', fakemsg)
}
handler.help = ['simpcard']
handler.tags = ['logo']  
handler.command = /^(simpcard)$/i  
handler.register = true
export default handler
