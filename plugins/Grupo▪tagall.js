let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`┃⋄ Grupo : *${groupMetadata.subject}*\n┃⋄ 𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒 : *${participants.length}*${text ? `\n┃⋄ 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 : ${text}\n` : ''}\n┏━━━━⊜ 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒\n` + users.map(v => '┃⋄ @' + v.replace(/@.+/, '')).join`\n` + '\n┗━━✪ 𝐋𝐎𝐁𝐎-𝐌𝐃 ┃ ᴮᴼᵀ ✪━━', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
