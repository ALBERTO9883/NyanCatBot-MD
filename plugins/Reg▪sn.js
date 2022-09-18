import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
let nserie = `
 *🌅 | • _NÚMERO DE SERIE_ •*

*► ${sn}*`
const botones = [
{index: 1, urlButton: {displayText: `•Cᴏᴘɪᴀʀ Nsᴇʀɪᴇ`, url: `https://www.whatsapp.com/otp/copy/${sn}`}},
]
await conn.sendMessage(m.chat, { text: `${nserie}`, templateButtons: botones, footer: botname })
}
handler.help = ['nserie']
handler.tags = ['rg']
handler.command = ['nserie', 'sn'] 
handler.register = true
export default handler
