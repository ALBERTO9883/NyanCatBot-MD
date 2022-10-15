import { 
    youtubedl,
    youtubedlv2,
    youtubeSearch 
} from '@bochilteam/scraper'

import fetch from 'node-fetch'


let handler = async (m, { conn, args, isPrems, isOwner, text }) => {
let vid = (await youtubeSearch(text)).video[0]
let { authorName, description, videoId, durationH, viewH, publishedTime, thumbnail, title } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
  
    if (!args || !args[0]) throw `*_⚠️ Inserte el comando más el enlace de YouTube._*`
  
  
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰\n⚘Aʟʙᴇʀᴛᴏ Y Asʜʟʏ⚘', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
const sections = [
	{
	title: "⚠️ Seleccione su tipo de archivo!",
	rows: [
	    {title: "Audio🎶", rowId: `-getaud ${args[0]} audio`}
	]
    },
    {
	title: "Video🎬",
	rows: [
	    {title: "1080p", rowId: `-getvid ${args[0]} 1080`},
{title: "720p", rowId: `-getvid ${args[0]} 720`},
{title: "480p", rowId: `-getvid ${args[0]} 480`},
{title: "360p", rowId: `-getvid ${args[0]} 360`}

	]
    },
   
]

const listMessage = {
  text: `\n⚠️ *Porfavor seleccione su archivo multimedia aquí...ฅ^•ﻌ•^ฅ⚘*`,
  footer: `\n${botname}`,
  title: `\t\t\t*『⊜─⌈📻 ◜YouTube Play◞ 📻⌋─⊜』*
  
❏ 🐢 *Autor:* ${authorName}
❏ 📓 *Título:* ${title}
❏ ⏰ *Duración:* ${durationH}`,
  buttonText: "*⛾ RESULTADOS*",
  sections
}
return conn.sendMessage(m.chat, listMessage, { quoted: estilo  })
}


handler.command = ['ytgetdl']
handler.exp = 3

export default handler
