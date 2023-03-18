import fetch from 'node-fetch'
import fs from 'fs'

let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*\n_📌 Ejemplo:_ *${ prefix + command}* WhatsApp`
let sfoto = fs.readFileSync('./storage/image/apksearch.png')

let json = await fetch(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
let jsons = await json.json()
let listSections = []
	Object.values(jsons.respon).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['📥 • Descargar', `${prefix}apkdl2 ${v.link} yes`, `${v.link}`]
        ]])
	})
	return conn.sendList(m.chat, '*◜RESULTADOS ENCONTRADOS🔍◞*', `\n🎋 • *Resultados de:* *${text}*`, saludo, `Click Aquí`, listSections, m)
	} catch {
    m.reply('⚠️ *_Resultados no encontrados, intentelo nuevamente más tarde._*')
  }
}    
handler.command = ['searchapk', 'apksearch']
export default handler