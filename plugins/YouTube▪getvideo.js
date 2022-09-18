import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

let handler = async (m, { conn, args, isPrems, isOwner }) => {

try {
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
  
 await m.reply(`❏ 📓 *Tɪ́ᴛᴜʟᴏ:* ${ttl}
❏ 📁 Tᴀᴍᴀɴ̃ᴏ: ${size}

${global.wait}`)
  await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'video']: { url: dl_url }, fileName: `${me}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: m })
}catch(e){
m.reply('⚠️ *_Error, calidad de video no encontrada.._*')
console.log(e)}}


handler.command = /^(getvid)$/i
export default handler
