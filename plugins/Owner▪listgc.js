let handler = async (m, { conn, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating()),
		txt = `*⊜ LISTA DE GRUPOS📒*\n\n*Total:* ${groups.length}\n\n`
	for (let i = 0; i < groups.length; i++) {
		txt += `*「 🐢 」Nombre:* ${groups[i].subject}\n`
			+ `*「 📍 」ID:* ${groups[i].id}\n`
			+ `${isOwner ? `*「 👥 」Participantes:* ${groups[i].participants.length}\n` : ''}`
			+ `${isOwner ? `*「 👑 」Bot Admin:* ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin}\n` : ''}\n──•\n`
	}
	m.reply(txt.trim())
}
handler.help = ['grouplist']
handler.tags = ['owner']
handler.command = ['grouplist', 'listgroup'] 

export default handler
