
import yts from 'yt-search'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, {conn, text }) => {
  if (!text) throw '⚠️ *_Que quieres que busque en YouTube?_*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let img = await (await fetch(`${tes[0].thumbnail}`)).buffer()
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_Link :_* ${v.url}
↳ 🕒 *_Duración :_* ${v.timestamp}
↳ 📥 *_Subido :_* ${v.ago}
↳ 👁 *_Vistas :_* ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  await conn.sendUrl(m.chat, teks, m, {
    externalAdReply: {
       mediaType: 1,
       renderLargerThumbnail: true,
       thumbnail: img,
       thumbnailUrl: img,
       title: botname,
    }})
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
handler.register = true

export default handler
