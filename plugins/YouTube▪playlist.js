
import yts from 'yt-search'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Sit Down Be Side Me`
    let results = await yts(text)
    let tes = results.all
    let listSections = []
	Object.values(tes).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['Aᴜᴅɪᴏ 🎵', `${usedPrefix}ytmp3 ${v.url} yes`, `❏🐢 Autor: ${v.author.name || 'No se encontró al author'} • ${v.timestamp}\n❏📆 Pᴜʙʟɪᴄᴀᴅᴏ: ${v.ago}\n`],
          ['Aᴜᴅɪᴏ Doc🎵', `${usedPrefix}ytadoc ${v.url} yes`, `❏🐢 Autor: ${v.author.name || 'No se encontró al author'} • ${v.timestamp}\n❏📆 Pᴜʙʟɪᴄᴀᴅᴏ: ${v.ago}\n`],
          ['Vɪᴅᴇᴏ 🎥', `${usedPrefix}ytmp4 ${v.url} yes`, `❏🐢 Autor: ${v.author.name || 'No se encontró al author'} • ${v.timestamp}\n❏📆 Pᴜʙʟɪᴄᴀᴅᴏ: ${v.ago}\n`],
          ['Vɪᴅᴇᴏ Doc🎥', `${usedPrefix}ytvdoc ${v.url} yes`, `❏🐢 Autor: ${v.author.name || 'No se encontró al author'} • ${v.timestamp}\n❏📆 Pᴜʙʟɪᴄᴀᴅᴏ: ${v.ago}\n`] 
        ]])
	})
	m.react('🎧')
	return conn.sendList(m.chat, '\t\t *⊜─⌈📻 ◜YouTube List◞ 📻⌋─⊜*', `\n🎧 • *Lista de resultados encontrados* :\n ► *${text}*`, botname, `Click Aquí`, listSections, m)
}
handler.help = ['playlist *<texto>*']
handler.tags = ['downloader']
handler.command = ['playlist', 'listplay'] 

export default handler
