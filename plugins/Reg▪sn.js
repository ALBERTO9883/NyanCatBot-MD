import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
await m.ftext(`*🌅 | • _SU NÚMERO DE SERIE_ •* ⬇️`)
await m.ftext(`${sn}`.trim())
}
handler.help = ['nserie']
handler.tags = ['rg']
handler.command = ['nserie', 'sn'] 
handler.register = true
export default handler
