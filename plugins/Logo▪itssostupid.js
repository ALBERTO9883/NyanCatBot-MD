let handler = async (m, { conn, args }) => {
let text = args.slice(1).join(' ')
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
await conn.reply(m.chat, global.wait, m)
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
dog: text || 'im+stupid'
}), 'error.png', `*Aqui tienes*`, fakemsg)
}  
handler.help = ['itssostupid', 'iss', 'stupid']
handler.tags = ['logo']
handler.command = /^(itssostupid|iss|stupid)$/i
handler.register = true
export default handler
