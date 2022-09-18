import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️ *Escriba un Nombre de Usuario.*\n\n📌 *_Ejemplo :_* ${usedPrefix + command} carlos_acosta.1`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    await conn.reply(m.chat, global.wait, m)
    m.reply(`
┏━⊜「 *STALKING* 」
┃⋄ *🔖 Nombre Completo* : *_${name}_*
┃⋄ *🔖 Username* : _${username}_
┃⋄ *👥 Seguidores* : _${followersH}_
┃⋄ *🫂 Siguiendo* : _${followingH}_
┃⋄ *📌 Bio :* _${description}_
┃
┃⋄ *🔗 Link* : *_https://instagram.com/${username.replace(/^@/, '')}_*
┗━━━━━⬣
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' *<username>*')
handler.tags = ['downloader']

handler.command = ['igstalk'] 
handler.register = true

handler.register = true
export default handler
