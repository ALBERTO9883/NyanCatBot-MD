let limit = 80
import yts from 'yt-search'
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3, youtubeSearch } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command, text }) => {
if (!args || !args[0]) throw `*_⚠️ Inserte el comando más el enlace de YouTube._*`
conn.sendNyanCat(m.chat, global.wait, adnyancat, adyoutube, null, script, m) 
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
let vid = (await yts(text)).all[0]
let { timestamp, views, ago, url } = vid
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
conn.sendMessage(m.chat, { document: { url: link }, mimetype: "audio/mpeg", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(thumbnail)).buffer()}}}, { quoted: m })
}
handler.help = ['ytadoc *<link yt>*']
handler.tags = ['downloader']
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
export default handler
