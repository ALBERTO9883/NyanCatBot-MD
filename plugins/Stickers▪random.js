import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let res = await fetch("https://supra-api.herokuapp.com/api/stickera?apikey=supraz")
let { url } = res
  conn.sendFile(m.chat, url, 'dado.webp', '', m)
}
handler.help = ['stickerrandom']
handler.tags = ['sticker']
handler.command = ['stickerrandom'] 

export default handler
