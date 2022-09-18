let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
await conn.reply(m.chat, global.wait, m)
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '*Nice... ฅ^•ﻌ•^ฅ⚘🔥*', fakemsg)
}
handler.help = ['hornycard', 'hornylicense']
handler.tags = ['logo'] 
handler.command = /^(horny(card|license))$/i 
handler.register = true
export default handler
