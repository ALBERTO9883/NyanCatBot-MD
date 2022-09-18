let handler = async (m, { conn, text }) => {
  if (!text) throw '*_⚠️ Agregue el texto que enviará el Bot_.*'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention *<texto>*']
handler.tags = ['tools']

handler.command = /^mention$/i

export default handler
