let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Bio'
 // let biot = bio.Status(who).catch(_ => 'Sin Bio')
  let user = global.db.data.users[who]
  let username = conn.getName(who)
  let str = `π | ${username}`
  const botones = [
{index: 1, urlButton: {displayText: `βπβππΈβ βπππΉβπΌ`, url: `https://www.whatsapp.com/otp/copy/${username}`}},
]
await conn.sendMessage(m.chat, { text: str, templateButtons: botones, footer: botname }, { quoted: m })
  
  }

handler.help = ['getname', 'getname *@tag*']
handler.tags = ['group']
handler.command = /^(getname|nombre)$/i

export default handler
handler.admin = true