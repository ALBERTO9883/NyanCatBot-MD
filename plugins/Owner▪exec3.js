let handler = async (m, { conn, usedprefix, command, text }) => {
 try {
  return m.reply(JSON.stringify(eval(command.trimStart() + ' ' + text.trimEnd()), null, "\t"))
 } catch (err) {
  let e = String(err);
  m.reply(e);
 }
}

handler.help = ['<']
handler.tags = ['advanced']
handler.customPrefix = /^[<] /
handler.command = new RegExp

handler.owner = true

export default handler
