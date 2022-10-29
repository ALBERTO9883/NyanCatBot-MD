import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

let handler = async (m, { conn, args, isPrems, isOwner }) => {

try {
let chat = global.db.data.chats[m.chat]
let qu = args[1] || '360'
  let q = qu + 'p'
  let v = args[0]

  let _thumb = {}
    try { _thumb = { jpegThumbnail: thumb2 } }
    catch (e) { }

// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.video[q].download()
  const ttl = await yt.title
const size = await yt.video[q].fileSizeH
 
await conn.sendNyanCat(m.chat, `❏ 📓 *Tɪ́ᴛᴜʟᴏ:* ${ttl}
❏ 📁 Tᴀᴍᴀɴ̃ᴏ: ${size}

${global.wait}`, adnyancat, adyoutube, me, script, m) 
  await conn.sendFile(m.chat, dl_url, ttl + '.mp4', `
*🎋 ❏ Título:* ${ttl}
*📁 ❏ Peso del vídeo:* ${size}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})
}catch(e){
m.reply('⚠️ *_Error, no se pudo descargar el video o quizás esta calidad de video no exista..._*')
console.log(e)}
}

handler.tags = ['downloader']
handler.help = ['getvid *<url yt>*']
handler.command = /^(getvid)$/i
export default handler
