import { 
    youtubedl,
    youtubedlv2,
    youtubeSearch
} from '@bochilteam/scraper'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, isPrems, isOwner, text }) => {
let vid = (await youtubeSearch(text)).video[0]
let { authorName, description, videoId, durationH, viewH, publishedTime, thumbnail } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
try {

  let q = '128kbps'
  let v = args[0]


const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
  
 await m.reply(`❏ 📓 *Tɪ́ᴛᴜʟᴏ:* ${ttl}
❏ 📁 Tᴀᴍᴀɴ̃ᴏ: ${size}

${global.wait}`)
  await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: ttl + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `${ttl}`,
body: `${authorName}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(thumbnail)).buffer()}}}, { quoted: m })
}catch(e){
m.reply('⚠️ *_Error, no se pudo descargar el audio..._*')
console.log(e)}
}
handler.tags = ['downloader']
handler.help = ['getaud *<url yt>*']
handler.command = /^(getaud)$/i
export default handler
