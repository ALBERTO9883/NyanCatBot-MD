import db from '../lib/database.js'
let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
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
        await conn.sendButton(m.chat, `*≡ Enlace Detectado*
            
🐢Nᴏ Sᴇ Pᴇʀᴍɪᴛᴇɴ Eɴʟᴀᴄᴇs Eɴ Esᴛᴇ Cʜᴀᴛ Lᴏ Sɪᴇɴᴛᴏ *@${m.sender.split`@`[0]}* Sᴇʀᴀ́s Exᴘᴜʟsᴀᴅᴏ Dᴇʟ Gʀᴜᴘᴏ ${isBotAdmin ? '' : '\n\nTᴇ Sᴀʟᴠᴀsᴛᴇ Nᴏ Sᴏʏ Aᴅᴍɪɴ =/'}`, ignyc, ['AɴᴛɪLɪɴᴋ Oғғ❌', '/off antilink'], m, { mentions: [m.sender] })
        if (isBotAdmin && chat.antiLink) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
    
}
