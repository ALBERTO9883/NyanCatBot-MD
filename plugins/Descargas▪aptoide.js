import fetch from 'node-fetch'
import { download } from 'aptoide-scraper'
import ufs from 'url-file-size'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
   std: 'JEDEC',
   decimalPlaces: 2,
   keepTrailingZeroes: false,
   render: (literal, symbol) => `${literal} ${symbol}B`,
})
let limit = 300

let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply('Ingresa el ID de un resultado de la busqueda de Aptoide.')
let res = await download(text)
let size = await format(await ufs(res.dllink))
if (Number(size.split(' MB')[0]) >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))
   if (Number(size.split(' GB')[0]) >= 0) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))
   let img = await (await fetch(res.icon)).buffer()
   
let txt = `*• 💽 Aptoide Download •*\n\n`
         txt += `	◦  *Nombre* : ${res.name}\n`
         txt += `	◦  *Package* : ${res.package}\n`
         txt += `	◦  *Tamaño* : ${size}\n`
         txt += `	◦  *Subido* : ${res.lastup}\n\n`
         txt += `El archivo se esta enviando, Espere un momento.`
      await conn.sendUrl(m.chat, txt, m, {
         externalAdReply: {
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: img,
            thumbnailUrl: img,
            title: botname,
         }
      })
      conn.sendMessage(m.chat, { document: { url: `${res.dllink}` }, mimetype: 'application/videos.android.package-archive', fileName: `${res.name}.apk` }, { quoted: m })
      }

handler.tags = ['downloader']
handler.help = ['dlaptoide *<enlace>*']
handler.command = ['aptoidedl', 'dlaptoide']

export default handler

handler.register = true