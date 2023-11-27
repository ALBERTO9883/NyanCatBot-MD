import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, { conn }) => {
  const res = await conn.getFile(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`)
  conn.sendFile(m.chat, res.data, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })  
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['dado', 'dados'] 
handler.register = true

export default handler

