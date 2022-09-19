import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import fetch from 'node-fetch'

let handler = async (m, { text }) => {
	if (!text) throw '⚠️ *_Ingrese el nombre del módulo que desea buscar._*'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `⚠️ *_No se encontraron resultados de "${text}"_*`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: txt, contextInfo: { externalAdReply: { title: '🔎 • Buscador NPMJS', body: '', thumbnailUrl: 'https://telegra.ph/file/f40f44ea9fc4c49fe6f2f.jpg', sourceUrl: script }, mentionedJid: [m.sender] }}}, { quoted: m })
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}
handler.help = ['npmsearch']
handler.tags = ['search']
handler.command = /^npm(js|search)?$/i

export default handler
