let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `⚠️ *_No hay votaciones en este grupo!_*`, wm, null, [
    ['𝚅𝙾𝚃𝙰𝚁🗳️', `${usedPrefix}votar`],
    ['𝙼𝙴𝙽𝚄́🥗', `${usedPrefix}menu`]
], m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
    conn.reply(m.chat, `❎ *Ya has votado!*`, m)
    throw false
    }
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    try {
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
conn.sendButton(m.chat, caption, wm, false, [['𝙵𝙰𝚅𝙾𝚁✅', `/${command}`], ['𝙲𝙾𝙽𝚃𝚁𝙰❌', `/${command}`]], fakemsg, { mentions: conn.parseMention(caption) })
} catch {
    m.reply('⚠️ *_No hay votaciones activas en este grupo._*')
  }
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

export default handler
