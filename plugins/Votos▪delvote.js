let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `β οΈ *_No hay votaciones activas en este grupo!_*`, wm, null, [
    ['ππΎππ°ππ³', `${usedPrefix}vote`],
    ['πΌπ΄π½πΜπ₯', `${usedPrefix}menu`]
], m)
    delete conn.vote[id]
    m.reply(`π *_VotaciΓ³n acabada con Γ©xito._*`)
}
handler.help = ['delvote']
handler.tags = ['vote']
handler.command = /^(del|hapus|-)vote$/i

export default handler
