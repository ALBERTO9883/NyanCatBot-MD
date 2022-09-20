
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Sit Down Be Side Me`
    let result = await youtubeSearch(text)
    let ytres = result.video
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['Aᴜᴅɪᴏ 🎵', `${usedPrefix}ytmp3 ${v.url} yes`, `❏⌚ Dᴜʀᴀᴄɪᴏ́ɴ: ${v.durationH}\n❏📆 Pᴜʙʟɪᴄᴀᴅᴏ: ${v.publishedTime}\n`],
          ['Vɪᴅᴇᴏ 🎥', `${usedPrefix}ytmp4 ${v.url} yes`, `❏⌚ Dᴜʀᴀᴄɪᴏ́ɴ: ${v.durationH}\n❏📆 Pᴜʙʟɪᴄᴀᴅᴏ: ${v.publishedTime}\n`]
        ]])
	})
	m.react('🎧')
	return conn.sendList(m.chat, '\t\t *⊜─⌈📻 ◜YouTube List◞ 📻⌋─⊜*', `\n🎧 • *Lista de resultados encontrados* :\n ► *${text}*`, botname, `Click Aquí`, listSections, m)
}
handler.help = ['playlist *<texto>*']
handler.tags = ['downloader']
handler.command = ['playlist', 'listplay'] 

export default handler
