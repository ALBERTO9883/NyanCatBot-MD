// Aportado por https://github.com/SinNombre999

export async function before(m, { conn, isAdmin, isBotAdmin }) {
let vn = './storage/stickers/hola.webp'
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
    const chat = global.db.data.chats[m.chat]
    const bot = global.db.data.settings[this.user.jid] || {}
if (chat.antiTraba) {   
    if (m.text.length > 5000) {
      if (isBotAdmin && m.isGroup) {
try {
let key = {}
try {
key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
} catch (e) {
console.error(e)}
 await conn.sendMessage(m.chat, { delete: key })
} catch {
 await conn.sendMessage(m.chat, { delete: m.quoted.vM.key })}
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      }
      await conn.reply(m.chat, '*MARCAR CHAT COMO LEÍDO, SE DETECTO UN MENSAJE CON DEMASIADOS CARÁCTERES POR LO TANTO SE MANDÓ ESTA DESTRABA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *SE DETECTÓ ESTE MENSAJE COMO UNA TRABA, POR LO TANTO SE MANDÓ ESTA DESTRABA*', false, { quoted:  fakemsg})
conn.sendFile(m.chat, vn, 'hola.webp', null, estilo, true, { type: 'webpMessage', ptt: true, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: me, mediaType: 2, sourceUrl: global.linkgc, thumbnail: miniurl}}}, { quoted: estilo })
    }
    return !0
  }
}