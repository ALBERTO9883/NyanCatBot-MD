import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '⚠️ *_Inserte el comando más el nombre de usuario de TikTok._*', m)
await conn.reply(m.chat, global.wait, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=85faf717d0545d14074659ad`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let ignyc = `
*⋄ Usuario:* ${json.result.username}
*⋄ Nombre:* ${json.result.nickname}
*⋄ Seguidores:* ${json.result.followers}
*⋄ Seguidos:* ${json.result.followings}
*⋄ Likes:* ${json.result.likes}
*⋄ Videos:* ${json.result.video}
*⋄ Descripción:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', ignyc, m, false)
} catch (e) {
throw '❎ *_Error, No se encontro el nombre de usuario ingresado_*'
}}
handler.help = ['tiktokstalk *<usuario>*']
handler.tags = ['downloader']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.register = true
export default handler
