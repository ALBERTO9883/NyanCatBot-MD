import fetch from 'node-fetch'
import translate from 'translate-google-api'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Ingrese un nombre a buscar`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
  const tld = 'cn'
let sinopsis = await translate(`${synopsis}`, { tld, to: 'es' })
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
let mangaingfo = `*Título:* ${title}
🌺 • *Capítulos:* ${chapters}
🥗 • *Temporadas:* ${volumes}
🌟 • *Calificación:* ${score}
🐋 • *Sinopsis:* ${sinopsis}
🍨 • *Link*: ${url}`
  conn.sendFile(m.chat, image_url, '', mangaingfo, m)
}
handler.help = ['manga *<nombre>*']
handler.tags = ['nime']
handler.command = /^(manga)$/i
handler.register = true

export default handler