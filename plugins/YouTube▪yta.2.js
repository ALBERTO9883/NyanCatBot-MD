let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3, youtubeSearch } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, text }) => {
if (!args || !args[0]) throw '*_⚠️ Inserte el comando más el enlace de YouTube._*'
await conn.reply(m.chat, global.wait, m)
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
let vid = (await youtubeSearch(text)).video[0]
let { authorName, description, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
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
await conn.sendMessage(m.chat, { document: { url: link }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${authorName}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnailUrl: thumbnail}}}, { quoted: m })
}
handler.help = ['ytadoc *<link yt>*']
handler.tags = ['downloader']
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
export default handler
