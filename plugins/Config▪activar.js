import fs from 'fs'
let handler = async (m, {command, conn, groupMetadata}) => {
//const verificado
const { isBanned, welcome, detect, viewonce, autolevelup, restrict, antilink, antidelete, autoread, solopv, sologp, autosticker, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]
let name = await conn.getName[who]
//────────────────────────
if (command == 'welcome') {
let chatwelcome = `*🌅 | WELCOME*

⊜ *_❝Active o Desactive la Bienvenida en este grupo❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
await conn.sendButton(m.chat, chatwelcome, `*• Bienvenida ${chat.welcome ? 'Activa ✅' : 'Desactivada ❎'}*\n${saludo}`, null, [['Activar✅', `.enable welcome`], ['Desactivar❎', '.disable welcome']], m, adgp)}
//────────────────────────
if (command == 'public') {
let chatpublic = `*🌄 | MODO PUBLICO*

⊜ *_❝Active o Desactive para que el bot sea de uso publico y/o privado❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatpublic, `*• Modo público ${chat.public ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable public`], ['Desactivar❎', '.disable public']], ownerfk)}
//────────────────────────
if (command == 'antilink') {
let chatantilink = `*🏞️ | ANTILINKS*

⊜ *_❝Active o Desactive para que el bot elimine a los que envíen enlaces de WhatsApp❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatantilink, `*• Antilink ${chat.antiLink ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable antilink`], ['Desactivar❎', '.disable antilink']], ownerfk)}
//────────────────────────
if (command == 'nsfw') {
let chatnsfw = `*🔞 | NSFW*

⊜ *_❝Active o Desactive para que funcionen los comandos +18❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatnsfw, `*• Nsfw ${chat.nsfw ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable nsfw`], ['Desactivar❎', '.disable nsfw']], ownerfk)}
//────────────────────────
if (command == 'autosticker') {
let chatautosticker = `*🌃 | AUTOSTICKER*

⊜ *_❝Active o Desactive para que toda imagen, videos o link se convierta en imagen❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatautosticker, `*• Autosticker ${chat.autosticker ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable autosticker`], ['Desactivar❎', '.disable autosticker']], ownerfk)}
//────────────────────────
if (command == 'antidelete') {
let chatantidelete = `*🚫 | ANTIDELETE*

⊜ *_❝Active o Desactive para que el bot reenvie los mensajes eliminados❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatantidelete, `*• Antidelete ${chat.antidelete ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable antidelete`], ['Desactivar❎', '.disable antidelete']], ownerfk)}
//────────────────────────
if (command == 'autolevelup') {
let chatlevelup = `*🌇 | AUTOLEVELUP*

⊜ *_❝Active o Desactive para subir de nivel automáticamente❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatlevelup, `*• Autolevelup ${chat.autolevelup ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable autolevelup`], ['Desactivar❎', '.disable autolevelup']], ownerfk)}
//────────────────────────
if (command == 'detect') {
let chatdetect = `*🔎 | DETECT*

⊜ *_❝Active o Desactive la info sobre las modificaciones del grupo❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatdetect, `*• Detect ${chat.detect ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable detect`], ['Desactivar❎', '.disable detect']], ownerfk)}
//────────────────────────
if (command == 'antiviewonce') {
let chatdetect = `*👀 | ANTIVIEWONCE*

⊜ *_❝Active o Desactive para reenviar los mensajes viewOnce❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatdetect, `*• Viewonce ${chat.antiviewonce ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable antiviewonce`], ['Desactivar❎', '.disable antiviewonce']], ownerfk)}
//────────────────────────
if (command == 'restrict') {
let chatrestrict = `*🌾 | RESTRICT*

⊜ *_❝Active o Desactive las restricciones para sacar gente del grupo❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatrestrict, `*• Restrict ${chat.restrict ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable restrict`], ['Desactivar❎', '.disable restrict']], ownerfk)}
//────────────────────────
if (command == 'autoread') {
let chatautoread = `*✔️ | AUTOREAD*

⊜ *_❝Active o Desactive para que el bot lea automáticamente todos los mensajes❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatautoread, `*• Autoread ${chat.autoread ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable autoread`], ['Desactivar❎', '.disable autoread']], ownerfk)}
//────────────────────────
if (command == 'solopv') {
let chatsolopv = `*🙎‍♂️️ | SOLO PRIVADO*

⊜ *_❝Active o Desactive para que el bot solo se pueda utilizar en privado❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatsolopv, `*• Solopv ${chat.solopv ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable solopv`], ['Desactivar❎', '.disable solopv']], ownerfk)}
//────────────────────────
if (command == 'sologp') {
let chatsologp = `*👥 | SOLO GRUPOS*

⊜ *_❝Active o Desactive para que el bot solo se pueda utilizar en grupos❞_*
`
await conn.sendPresenceUpdate('composing', m.chat)
conn.sendButton(m.chat, chatsologp, `*• Sologp ${chat.sologp ? 'Activo ✅' : 'Desactivado ❎'}*\n*• ${groupMetadata.subject}*`, null, [['Activar✅', `.enable sologp`], ['Desactivar❎', '.disable sologp']], ownerfk)}
//────────────────────────

}
handler.command = handler.help = ['welcome', 'public', 'antilink', 'nsfw', 'autosticker', 'antidelete', 'autolevelup', 'detect', 'antiviewonce', 'restrict', 'autoread', 'solopv', 'sologp']
handler.tags = ['nable']

handler.limit = false
handler.register = false

export default handler
handler.register = true
handler.group = false
handler.admin = true

// FAKE TEXT IMG
const textImg = (teks) => {
conn.sendMessage(m.chat, { text :chatwelcome, }, {quoted: m, thumbnail: catalogo})
}