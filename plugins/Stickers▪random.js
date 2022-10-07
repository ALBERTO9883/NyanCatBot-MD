import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let res = await fetch("https://supra-api.herokuapp.com/api/stickera?apikey=supraz")
let { url } = res
conn.sendFile(m.chat, url, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })
}
handler.help = ['stickerrandom']
handler.tags = ['sticker']
handler.command = ['stickerrandom'] 

export default handler
