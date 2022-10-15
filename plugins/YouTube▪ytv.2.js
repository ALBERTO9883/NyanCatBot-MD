let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3, youtubeSearch } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, text }) => {
if (!args || !args[0]) throw '*_⚠️ Inserte el comando más el enlace de YouTube._*'
conn.sendNyanCat(m.chat, global.wait, adnyancat, adyoutube, null, script, m) 
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
let vid = (await youtubeSearch(text)).video[0]
let { authorName, description, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSize
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
await conn.sendMessage(m.chat, { document: { url: link }, mimetype: "video/mp4", fileName: title + '.mp4', quoted: m, contextInfo: {
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
handler.help = ['ytvdoc *<link yt>*']
handler.tags = ['downloader']
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
export default handler
