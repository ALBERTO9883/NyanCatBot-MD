let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3, youtubeSearch } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command, text }) => {
if (!args || !args[0]) throw `*_⚠️ Inserte el comando más el enlace de YouTube._*`
conn.sendNyanCat(m.chat, global.wait, adnyancat, adyoutube, null, script, m) 
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
let vid = (await youtubeSearch(text)).video[0]
let { authorName, description, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSizeH
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '⚠️ *Error, ' + (lastError || 'no fue posible descargar el audio.*')
//conn.sendFile(m.chat, source, title + '.mp3', null, m, false, { contextInfo: { mimetype: 'audio/mp4', externalAdReply: { showAdAttribution: false, mediaType: 2, title: `${title}`, body: `${authorName}`, sourceUrl: `${url}`, thumbnailUrl: thumbnail }}})
conn.sendMessage(m.chat, { audio: { url: link }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${authorName}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(thumbnail)).buffer()}}}, { quoted: m })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
export default handler
