let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `⚠️ *_Etiquete la persona de la que quiere su vcard._*\n*📌 Ejemplo de uso:* ${usedPrefix + command} @tag`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Info'
 // let biot = bio.Status(who).catch(_ => 'Sin Bio')
  let user = global.db.data.users[who]
let name = await conn.getName(who)
const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nORG:${name}\nTITLE:\nitem1.TEL;waid=${who.split`@`[0]}:+${who.split`@`[0]}\nitem1.X-ABLabel:${name}\nX-WA-BIZ-DESCRIPTION:${biot}\nX-WA-BIZ-NAME:${name}\nEND:VCARD`
    conn.sendMessage(m.chat, { contacts: { displayName: `${name}`, contacts: [{ vcard }] }}, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.help = ['vcard *@tag*']
handler.tags = ['tools']

handler.command = ['vcard'] 
handler.group = true


export default handler
