let handler = async (m, { conn, participants }) => {
  if (!m.mentionedJid[0] && !m.quoted) throw '[❗] 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐥𝐨'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  if (user.includes(owr)) return await m.reply('[❗❗] 𝐍𝐨 𝐩𝐮𝐞𝐝𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐚 𝐪𝐮𝐢𝐞𝐧 𝐚 𝐜𝐫𝐞𝐚𝐝𝐨 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨')
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
