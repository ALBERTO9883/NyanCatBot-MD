import obs from 'obfuscator'

let handler = async (m, { conn, text }) => {
	if (!text) throw '⚠️ *_Ingrese el texto que desea ofuscar o encriptar._*'
	let enc = await obs.utils.hex(text)
	m.reply(enc)
}
handler.help = ['encrypt', 'ofuscar'].map(v => v + ' *<texto>*')
handler.tags = ['tools']
handler.command = /^(encrypt|ofuscar)$/i

export default handler
