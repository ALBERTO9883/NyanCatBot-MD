let handler = async (m, { conn, isOwner }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `
ββγ *CHATS BANEADOSπ₯* γ
ββ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
ββ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ββ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
βββββββ¬£

ββγ *π€USUARIOS BANEADOS* γ
ββ Total : ${users.length} Usuarios${users ? '\n' + users.map(([jid], i) => `
ββ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ββ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
βββββββ¬£
`.trim()
    conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
handler.help = ['banlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.owner = false
export default handler
