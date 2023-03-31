//Thanks to https://github.com/Gatito-kw

import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import ufs from 'url-file-size'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
   std: 'JEDEC',
   decimalPlaces: 2,
   keepTrailingZeroes: false,
   render: (literal, symbol) => `${literal} ${symbol}B`,
})

let limit = 350 // Limite de 350 MB

let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
   if (!text) return m.reply('Ingresa la url o título de un video de YouTube.')
   await m.react('🕓')
   let search = await yts(text.replace(' --yes', ''))
   let _res = search.all.map(v => v).filter(v => v.type == "video")
   let info = await ytdl.getInfo('https://youtu.be/' + _res[0].videoId)
   let res = await ytdl.chooseFormat(info.formats, { quality: '135' })
   
   /*FORMATOS
360p = 18
480p = 135
720p = 136
1080p = 137
*/
   
   
   let size = await format(await ufs(res.url))
   if (Number(size.split(' MB')[0]) >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))
   if (Number(size.split(' GB')[0]) >= 0) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))
   let img
   if (!text.includes('--yes')) {
	  let img = await (await fetch(_res[0].thumbnail)).buffer()
	  let txt = `\t\t\t\t*❁ཻུ۪۪ ⎧ ୧ YOUTUBE MP4 🪴⋅ ..⃗.*\n\n`
         txt += `↳ 🐢 *Autor* : ${_res[0].author.name}\n`
         txt += `↳ 📓 *Titulo* : ${_res[0].title}\n`
         txt += `↳ 🕒 *Duración* : ${_res[0].timestamp}\n`
         txt += `↳ 🗓️ *Publicado* : ${eYear(_res[0].ago) || _res[0].ago || '×'}\n`
         txt += `↳ 👀 *Vistas* : ${_res[0].views}\n`
         txt += `↳ 💽 *Calidad* : ${res.qualityLabel}\n`
         txt += `↳ 📟 *Tamaño* : ${size}\n`
         txt += `↳ 🫐 *Url* : ${'https://youtu.be/' + _res[0].videoId}\n\n`
         txt += `El video se esta enviando, Espere un momento.`
      await conn.sendUrl(m.chat, txt, m, {
         externalAdReply: {
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: img,
            thumbnailUrl: img,
            title: botname,
         }
      })
   }
   await conn.sendFile(m.chat, res.url, _res[0].title + '.mp4', `*${_res[0].title}  ‧  ${res.qualityLabel}*`, m, false, { asDocument: false })
   await m.react('😸')
}

handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'ytv']


export default handler

function sNum(num) {
    return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function eYear(txt) {
    if (txt.includes('month ago')) {
        var T = txt.replace("month ago", "").trim()
        var L = 'hace '  + T + ' mes'
        return L
    }
    if (txt.includes('months ago')) {
        var T = txt.replace("months ago", "").trim()
        var L = 'hace ' + T + ' meses'
        return L
    }
    if (txt.includes('year ago')) {
        var T = txt.replace("year ago", "").trim()
        var L = 'hace ' + T + ' año'
        return L
    }
    if (txt.includes('years ago')) {
        var T = txt.replace("years ago", "").trim()
        var L = 'hace ' + T + ' años'
        return L
    }
    if (txt.includes('hour ago')) {
        var T = txt.replace("hour ago", "").trim()
        var L = 'hace ' + T + ' hora'
        return L
    }
    if (txt.includes('hours ago')) {
        var T = txt.replace("hours ago", "").trim()
        var L = 'hace ' + T + ' horas'
        return L
    }
    if (txt.includes('minute ago')) {
        var T = txt.replace("minute ago", "").trim()
        var L = 'hace ' + T + ' minuto'
        return L
    }
    if (txt.includes('minutes ago')) {
        var T = txt.replace("minutes ago", "").trim()
        var L = 'hace ' + T + ' minutos'
        return L
    }
    if (txt.includes('day ago')) {
        var T = txt.replace("day ago", "").trim()
        var L = 'hace ' + T + ' dia'
        return L
    }
    if (txt.includes('days ago')) {
        var T = txt.replace("days ago", "").trim()
        var L = 'hace ' + T + ' dias'
        return L
    }
}
