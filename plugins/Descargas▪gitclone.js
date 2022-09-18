import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `• ¿Dónde está el enlace de github?\n\n📌 *_Ejemplo_* : ${usedPrefix + command} https://github.com/ALBERTO9983`
    if (!regex.test(args[0])) throw '⚠️ *_Link incorrecto_*'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  
    m.reply(`⛾️ *Espere, enviando repositorio...*`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone *<url>*']
handler.tags = ['downloader']
handler.command = ['gitclone'] 
handler.register = true
handler.limit = true

export default handler
