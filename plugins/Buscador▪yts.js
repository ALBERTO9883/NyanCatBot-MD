
import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '⚠️ *_Que quieres que busque en YouTube?_*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
🍂 ⋄ *${v.title}*
🔗 ⋄ *Link* : ${v.url}
⏱ ⋄ *Duración* : ${v.timestamp}
📥 ⋄ *Subido :* ${v.ago}
👁 ⋄ *Vistas:* ${v.views}`}}).filter(v => v).join('\n\n────────\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
handler.register = true

export default handler
