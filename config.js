import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs' 
 
//• ↳ᏢϴΝ ᏞϴՏ ΝႮ́ᎷᎬᎡϴՏ ϘႮᎬ ϘႮᏆᎬᎡᎪՏ
global.owner = [
  ['50499698072', '۪〬.࠭⤿ 👑 ⋅ Aʟʙᴇʀᴛᴏ', true],
  ['19045209846', '۪〬.࠭⤿ 👤 ⋅ LevelUp㋡', true],
  ['50246028932', '۪〬.࠭⤿ 👤 ⋅ SinNombre', true],
  ['50232239315', '۪〬.࠭⤿ 👤 ⋅ Xavi', true],
  ['573012949069', '۪〬.࠭⤿ 👤 ⋅ Yorman', true]
]
global.mods = [] 
global.prems = [] 
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw',
  fgmods: 'https://api.fgmods.xyz'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta',
  'https://api.fgmods.xyz': 'KgrTRknD'
}

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 🍁
global.ignyc = '\n🐱◌*̥₊ NʏᴀɴCᴀᴛBᴏᴛ ◌❐🎋༉\n❁ཻུ۪۪ ⎧ ୧ㅤ 𝘈𝘭𝘣𝘦𝘳𝘵𝘰ㅤ🎋⋅ ..⃗.\n' 
global.wm = '\n🐱◌*̥₊ NʏᴀɴCᴀᴛBᴏᴛ ◌❐🎋༉\n❁ཻུ۪۪ ⎧ ୧ㅤ 𝘈𝘭𝘣𝘦𝘳𝘵𝘰ㅤ🎋⋅ ..⃗.\n' 
global.botname = '🐱◌*̥₊ NʏᴀɴCᴀᴛBᴏᴛ ◌❐🎋༉'
global.me = '❁ཻུ۪۪ ⎧ ୧ㅤ 𝘈𝘭𝘣𝘦𝘳𝘵𝘰ㅤ🎋⋅ ..⃗.'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑻𝑬𝑿𝑻𝑶𝑺◞ • 🥗
global.adimagen = `🌅| Iᴍᴀ́ɢᴇɴᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ🌿` 
global.adanime = `🌸| Aɴɪᴍᴇ Bʏ NʏᴀɴCᴀᴛBᴏᴛ🈴` 
global.adyoutube = `🍁| Dᴇsᴄᴀʀɢᴀs ᴅᴇ YᴏᴜTᴜʙᴇ🍄` 
global.adsticker = `🏞️| Sᴛɪᴄᴋᴇʀs Bʏ NʏᴀɴCᴀᴛBᴏᴛ🌺` 
global.addescargas = `📤| Dᴇsᴄᴀʀɢᴀs Bʏ NʏᴀɴCᴀᴛ🌸`
global.adnsfw = `🔞| Nsғᴡ Bʏ NʏᴀɴCᴀᴛBᴏᴛ⭐`
 //▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

 
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰ 
//• ↳ ◜𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺◞ • 🍃
global.packname = `handler.exe = {\n  message: {\n    creator: "Alberto Acosta",\n    botname: "NyanCatBot",\n    fecha: "${fecha}"\n         }\n     };`
global.author = `A\nL\nB\nE\nR\nT\nO\n\n🐢`
//╰────────────────────╯	
	

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑴𝑺𝑮 𝑫𝑬 𝑬𝑺𝑷𝑬𝑹𝑨◞ • 🈸
global.wait = '⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.imgmenu = fs.readFileSync('./storage/image/nyanbot.jpg')
global.imgfgif = fs.readFileSync('./storage/image/fgif.jpg')
global.catalogo = fs.readFileSync('./storage/image/catalogo.png')
global.miniurl = fs.readFileSync('./storage/image/nyanmini.jpg')
global.nyanregis = fs.readFileSync('./storage/image/nyanregis.jpg')
global.imginv = fs.readFileSync('./storage/image/inventario.jpg')
global.imgshop = fs.readFileSync('./storage/image/shop.jpg')
global.menugif = fs.readFileSync('./storage/mp4/menu.mp4')
global.adnyancat = fs.readFileSync('./storage/image/adnyancat.jpg')
global.verificado = fs.readFileSync('./storage/image/verificado.png')
global.adnyancat18 = fs.readFileSync('./storage/image/nyancat+18.jpg')
global.nyancaterror = fs.readFileSync('./storage/image/nyancaterror.jpg')
global.ftextjpg = fs.readFileSync('./storage/image/ftextjpg.jpg')
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.linkgc = 'https://chat.whatsapp.com/D2kkLywqKa0G3IfIm7eNf2'
global.nycuser = 'https://github.com/ALBERTO9883'
global.script = 'https://github.com/ALBERTO9883/NyanCatBot-MD'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": catalogo, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑪𝑶𝑵𝑻𝑨𝑪𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.ownerfk = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑪𝑨𝑻𝑨́𝑳𝑶𝑮𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${botname}\n${me}`, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑮𝑰𝑭 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${me}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname}\n      ${me}`, 'jpegThumbnail': imgfgif }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑼𝑫𝑰𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}  
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑫𝑶𝑪𝑼𝑴𝑬𝑵𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fdocument = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${botname}\n   ${me}`,jpegThumbnail: catalogo}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑰𝑴𝑨𝑮𝑬𝑵 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑨◞ • 🌺
global.fakeimg = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"imageMessage": { "title":`${me}`, "h": `Hmm`,'seconds': '99999', 'imagePlayback': 'true', 'caption': `${botname}\n    ${me}`, 'jpegThumbnail': catalogo }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":`${botname}\n${me}`, "title": `${botname}`, 'jpegThumbnail': catalogo}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑶𝑪𝑨𝑳𝑰𝒁𝑨𝑪𝑰𝑶́𝑵 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑨◞ • 🌺
global.flocation = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${botname}\n   ${me}`,jpegThumbnail: catalogo}} }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑽𝑰́𝑫𝑬𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${botname}`, "h": `Hmm`,'seconds': '2022', 'caption': `${botname}`, 'jpegThumbnail': catalogo}} }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑰𝑵𝑲𝑮𝑷 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Alberto", "caption": `${botname}\n      ${me}`, 'jpegThumbnail': catalogo}} }
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑷𝑹𝑶𝑫𝑼𝑪𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `${botname}`, "description": "NyanCatBot-MD", "currencyCode": "USD", "priceAmount1000": "200000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑰𝑽𝑬 𝑳𝑶𝑪𝑨𝑳𝑰𝒁𝑨𝑪𝑰𝑶́𝑵◞ • 🌺
global.liveloc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":`${botname}`,"h": `${botname}`, 'jpegThumbnail': catalogo}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑷𝑹𝑶𝑫𝑼𝑪𝑻𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶 2◞ • 🌺
global.fproducto2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `${botname}`, "retailerId": "🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑽𝑰𝑬𝑾𝑶𝑵𝑪𝑬 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fakevoimg = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { imageMessage: { mimetype: 'image/jpeg', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑽𝑰𝑬𝑾𝑶𝑵𝑪𝑬 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶 #2◞ • 🌺
global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: {
  extendedTextMessage: {
    text: '=> m.message',
    previewType: 0,
    contextInfo: {
      mentionedJid: [],
      groupMentions: [],
      stanzaId: '1B0791BAB5D10FE6E78F69E64F013B02',
      participant: '50499698072@s.whatsapp.net',
      expiration: 7776000,
      ephemeralSettingTimestamp: true,
      disappearingMode: true
    }}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//• ↳ ◜𝑷𝑨𝒀𝑴𝑬𝑵𝑻 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶◞ • 🌺
global.fpay = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "requestPaymentMessage": { "currencyCodeIso4217": "USD", "amount1000": "100000", "requestFrom": "50499698072@s.whatsapp.net", "noteMessage": { "extendedTextMessage": { "text": botname }}, "expiryTimestamp": "0", "amount": { "value": "100000", "offset": 1000, "currencyCode": "USD" }, "background": { "id": "BBB9307B17C17F928E57A7435E45033E", "fileLength": "94896", "width": 64, "height": 64, "mimetype": "image/webp", "placeholderArgb": 4288282521, "textArgb": 4278190080, "subtextArgb": 4288282521}}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑬𝑵𝑪𝑼𝑬𝑺𝑻𝑨 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑨◞ • 🌺
global.fpoll = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "status@broadcast" }, "message": {"pollCreationMessage": {"name": wm, "selectableOptionsCount": 1}}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑫 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶◞ • 🌄
global.adgp = { contextInfo: { externalAdReply: { showAdAttribution: true, title: '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', body: global.botname, sourceUrl: global.linkgc, thumbnail: miniurl }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑫 𝑫𝑬 𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴◞ • 🌄
global.adig = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: "https://Instagram.com/rlxfly.uw", mediaType: "VIDEO", description: "https://Instagram.com/rlxfly.uw",  title: 'Test', body: `hola`, thumbnail: miniurl, sourceUrl: 'http://s.id/0x404' }}}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑨𝑫 𝑫𝑬 𝒀𝑶𝑼𝑻𝑼𝑩𝑬◞ • 🌄
global.adyt = { contextInfo: { externalAdReply: { showAdAttribution: true, title: botname, mediaType: 2, previewType: "VIDEO", thumbnail: imgmenu, mediaUrl: 'https://youtu.be/FKVuVneuwtg', sourceUrl: linkgc }}} 
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑲𝑬𝒀𝑺 𝑨𝑷𝑰𝑺◞ • 🌾
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.fgapikey = ['fg-dylux']
global.zenzapikey = ['zenzkey_048b3b850d51']
global.ibengapijson = ['GeVyaThW9S', 'HrGOK5NCnV']
global.ibengapi = ibengapijson[Math.floor(ibengapijson.length * Math.random())]
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche 🌙'; break; case 1: hour = 'una linda noche 💤'; break; case 2: hour = 'una linda noche 🦉'; break; case 3: hour = 'una linda mañana ✨'; break; case 4: hour = 'una linda mañana 💫'; break; case 5: hour = 'una linda mañana 🌅'; break; case 6: hour = 'una linda mañana 🌄'; break; case 7: hour = 'una linda mañana 🌅'; break; case 8: hour = 'una linda mañana 💫'; break; case 9: hour = 'una linda mañana ✨'; break; case 10: hour = 'un lindo dia 🌞'; break; case 11: hour = 'un lindo dia 🌨'; break; case 12: hour = 'un lindo dia ❄'; break; case 13: hour = 'un lindo dia 🌤'; break; case 14: hour = 'una linda tarde 🌇'; break; case 15: hour = 'una linda tarde 🥀'; break; case 16: hour = 'una linda tarde 🌹'; break; case 17: hour = 'una linda tarde 🌆'; break; case 18: hour = 'una linda noche 🌙'; break; case 19: hour = 'una linda noche 🌃'; break; case 20: hour = 'una linda noche 🌌'; break; case 21: hour = 'una linda noche 🌃'; break; case 22: hour = 'una linda noche 🌙'; break; case 23: hour = 'una linda noche 🌃'; break;}
  global.saludo = "Espero que tengas " + hour;
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

global.multiplier = 9999 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.magenta(" ⤿ Actualizado • 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})