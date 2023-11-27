import fetch from 'node-fetch'
import { search } from 'aptoide-scraper'

let handler = async (m, {conn, usedPrefix, text }) => {
   if (!text) return m.reply('⚠️ *_Ingresa lo que deseas buscar en Aptoide._*')
   await m.react('🕓')
   let results = await search(text)
   let res = Object.values(results).map(v => v)
   if (!res.length) return m.reply('⚠️ *_No se encontraron resultados, intente con un nombre más Corto._*').then(_ => m.react('✖️'))
   let img = await (await fetch('https://telegra.ph/file/e7eae20d14bf755fc4ebb.jpg')).buffer()
   let txt = `*• 💽 Aptoide Search •*`
   for (let i = 0; i < (15 <= res.length ? 15 : res.length); i++) {
      txt += `\n\n`
      txt += `	⤿  *Nro* : ${1+i}\n`
	  txt += `	⤿  *Nombre* : ${res[i].name}\n`
	  txt += `	⤿  *ID* : ${res[i].id}\n`
   }
   await conn.sendUrl(m.chat, txt, m, {
      externalAdReply: {
         mediaType: 1,
         renderLargerThumbnail: true,
         thumbnail: img,
         thumbnailUrl: img,
         title: botname,
      }
   })
   await m.react('✅')
}

handler.help = ['aptoide *<texto>*']
handler.tags = ['search']
handler.command = ['aptoide']

export default handler
