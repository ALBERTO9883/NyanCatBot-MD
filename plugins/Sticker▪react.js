let { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  if (!args[0]) throw `⚠️️ *_Responde a un mensaje usando el comando más un emoji para reaccionar._*\n\n📌 *_Ejemplo_* ${usedPrefix + command} 🤫`
  let q = m.quoted ? await m.getQuotedObj() : m
 conn.sendMessage(m.chat, { react: { text: args[0], key: q.key }}, { quoted: q })
}
handler.help = ['react *<emoji>*']
handler.tags = ['sticker']
handler.command = ['react', 'reaccionar', 'reaccion'] 

export default handler
