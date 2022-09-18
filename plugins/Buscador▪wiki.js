import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
    try {
    //  if (!text) throw `✳️ Ingrese lo que quiere buscar en Wikipedia`
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`🔎 *Wikipedia*

‣ Buscado : ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ *_No se han encontrado resultados_* ')
}
}
handler.help = ['wikipedia']
handler.tags = ['search']
handler.command = ['wiki','wikipedia'] 
handler.register = true


export default handler
