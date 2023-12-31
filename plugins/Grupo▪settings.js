let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': 'not_announcement',
		'on': 'not_announcement',
		'abrir': 'not_announcement',
		'close': 'announcement',
		'off': 'announcement',
		'cerrar': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined)
		throw `
⚠️ *_Porfavor elija una opción:_*
  ${usedPrefix + command} cerrar
  ${usedPrefix + command} abrir
`.trim()
	await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo <abrir/cerrar>']
handler.tags = ['group']
handler.command = /^(grupo)$/i
handler.register = true
handler.admin = true
handler.botAdmin = true

export default handler
