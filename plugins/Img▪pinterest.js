import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `⚠️ *Que imagen quieres que busque?*\n\n📌 *_Ejemplo  :_* ${usedPrefix + command} Lil Peep`
  const json = await pinterest(text)
  await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*• ♦️ Pinterest:*  ${text}
`.trim(), fakemsg)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest'] 
handler.register = true

export default handler
