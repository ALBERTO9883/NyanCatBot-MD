
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `⚠️ *Escriba un Nombre de Usuario.*\n\n📌 *_Ejemplo :_* ${usedPrefix + command} carlos_acosta.1` 
    let res = await fg.igStalk(args[0])
    let te = `
┏━⊜「 *STALKING* 」
┃⋄ *🔖Nombre:* ${res.name} 
┃⋄ *🔖Username:* ${res.username}
┃⋄ *👥Seguidores:* ${res.followersH}
┃⋄ *🫂Siguiendo:* ${res.followingH}
┃⋄ *📌Bio:* ${res.description}
┃⋄ *🏝️Posts:* ${res.postsH}
┃
┃⋄ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
┗━━━━━⬣`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk *<nombre de usuario>*']
handler.tags = ['downloader']
handler.command = ['igstalk'] 
handler.register = true

export default handler