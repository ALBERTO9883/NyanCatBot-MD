import fetch from 'node-fetch'
import fs from 'fs' 
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*_⚠️ Porfavor ingrese un link/enlace de tiktok._*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*_⚠️ Enlace de TikTok incorrecto._*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*_❎Error, ocurrio un error inesperado vuelva a intentarlo_*'
let meta = await getInfo(url).catch(_ => {})
await m.reply(global.wait)
//let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
//conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: '_ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ_', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })}
conn.sendButton(m.chat, `*Aqui tiene su video ฅ^•ﻌ•^ฅ⚘*`, ``, data[data.length - 1], [['「AUDIO🔊」', `.tomp3`]], m, { contextInfo: { externalAdReply: { showAdAttribution: false, title: '🌿 TikTok Downloader', body: me, sourceUrl: global.script, thumbnail: fs.readFileSync('./storage/image/tiktoklogo.jpg') }}})}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
