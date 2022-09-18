let handler = async (m, { conn, participants }) => {
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  if (user.includes(owr)) return await m.reply('No puedo eliminarlo\'a por que el creó el grupo')
  conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`Se eliminó a *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|ban|echar|hechar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true
handler.rowner = true 

export default handler
