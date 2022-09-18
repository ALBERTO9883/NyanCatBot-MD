let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
await conn.reply(m.chat, global.wait, m)
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*Nice... ฅ^•ﻌ•^ฅ⚘*', fakemsg)
}
handler.help = ['pixel','difuminar']
handler.tags = ['logo']
handler.command = /^(pixel|pixelar|difuminar)$/i
handler.register = true
export default handler
