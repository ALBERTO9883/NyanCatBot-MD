

import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `⚠️️ *Que fondo de pantalla busco?*`
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
  await conn.sendFile(m.chat, img.url_image, 'wallpaper', '✅ Genial no?', fakemsg)
  
}
handler.help = ['wallpaper']
handler.tags = ['img']
handler.command = ['wallpaper', 'wallpapers', 'wp']
handler.register = true
handler.limit = true

export default handler
