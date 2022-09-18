let handler = async (m, { conn, isOwner }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `
┏⊜「 *CHATS BANEADOS👥* 」
┃⋄ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
┃⋄ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
┃⋄ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
┗━━━━━⬣

┏⊜「 *👤USUARIOS BANEADOS* 」
┃⋄ Total : ${users.length} Usuarios${users ? '\n' + users.map(([jid], i) => `
┃⋄ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
┃⋄ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
┗━━━━━⬣
`.trim()
    conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
handler.help = ['banlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.owner = false
export default handler
