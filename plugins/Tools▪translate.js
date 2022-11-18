import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg =  `
📌 *_Ejemplo :_*
*${usedPrefix + command}* <idioma> [texto]
${usedPrefix + command} es Hello World
✳️ Lista de idiomas admitidos: 
https://cloud.google.com/translate/docs/languages
`.trim()
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { tld, to: lang, })
await m.reply('' + result)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply(''+ result2)
} catch { 
await m.reply('*_Error inesperado, vuelva a intentarlo más tarde :)_*')    
}}}
handler.tags = ['tools']
handler.help = ['translate <idioma> <texto>']
handler.command = /^(translate|traducir|trad)$/i
export default handler
