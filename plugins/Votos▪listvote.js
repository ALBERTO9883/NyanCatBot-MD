
let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], m)

    let [reason, upvote, devote] = conn.vote[id]
    
let caption = `
\t\t\t\t*✲◜🗳️ VOTACIONES 🗳️◞✲*

「 📣 」Razón:* ${reason}

\t\t\t*「 ✅ 」VOTOS A FAVOR「 ✅ 」*
*Total: ${upvote.length}*
${upvote.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}

\t\t*「 ❌ 」VOTOS EN CONTRA「 ❌ 」*
*Total:* ${devote.length}
${devote.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
`
conn.sendButton(m.chat, caption, wm, false, [['𝙵𝙰𝚅𝙾𝚁✅', `/upvote`], ['𝙲𝙾𝙽𝚃𝚁𝙰❌', `/devote`]], fakemsg, { mentions: conn.parseMention(caption) })
}
handler.help = ['listvote']
handler.tags = ['vote']
handler.command = /^listvote$/i

export default handler
