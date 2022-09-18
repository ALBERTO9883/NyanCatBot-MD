let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.sendButton(m.chat, `
⚠️ *_Porfavor elija una opción._*`.trim(), botname, false, [['「ABRIR🔓」', '.grupo 1'], ['「CERRAR🔒」', '.grupo 0']], m)
		throw false
	}
	await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo <abrir/cerrar>']
handler.tags = ['group']
handler.command = /^(grupo)$/i
handler.register = true
handler.admin = true
handler.botAdmin = true

export default handler
