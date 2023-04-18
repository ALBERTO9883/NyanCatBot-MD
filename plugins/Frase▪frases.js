import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {

if (command == 'consejo') {
let res = await fetch(`https://api-fgmods.ddns.net/api/motivation?apikey=${fgapikey}`)
let json = await res.json()
let { mtiva } = json.result

m.reply(`*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${mtiva}*\n*┗━━━━━━━━━━━━━━━━┚*`)}

if (command == 'fraseromantica') {
let res = await fetch("https://api.popcat.xyz/pickuplines")
let json = await res.json()
let { pickupline } = json
const tld = 'cn'
let frase = await translate(`${pickupline}`, { to: 'es', autoCorrect: true })
let fraseromantica = `*╭─◆────◈⚘◈─────◆─╮*\n*❥  ${frase.text}*\n*╰─◆────◈⚘◈─────◆─╯*`
conn.sendNyanCat(m.chat, fraseromantica, await (await fetch('https://telegra.ph/file/62ef85167cc5015d4b40c.jpg')).buffer(), 'Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺', '◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱', script, m)
}

if (command == 'frase') {
let res = await fetch("https://api.popcat.xyz/quote")
let json = await res.json()
let { quote } = json
const tld = 'cn'
let frase = await translate(`${quote}`, { to: 'es', autoCorrect: true })
conn.sendNyanCat(m.chat, frase.text, await (await fetch('https://telegra.ph/file/f6a339acb8b55b33c99dc.jpg')).buffer(), 'Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺', '◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱', script, m)
}
if (command == 'dato') {
let res = await fetch("https://api.ibeng.tech/api/random/fakta?apikey=tamvan")
let json = await res.json()
let { result } = json
let frase = await translate(`${result}`, { to: 'es', autoCorrect: true })
conn.sendNyanCat(m.chat, frase.text, await (await fetch('https://telegra.ph/file/bc98459abf3e9b050cb1b.jpg')).buffer(), 'Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺', '◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱', script, m)
}
if (command == 'frasesabia') {
let res = await fetch("https://api.ibeng.tech/api/random/katabijak?apikey=tamvan")
let json = await res.json()
let { result } = json
let frase = await translate(`${result}`, { to: 'es', autoCorrect: true })
conn.sendNyanCat(m.chat, frase.text, await (await fetch('https://telegra.ph/file/31a2a876b8cd95cfd4580.jpg')).buffer(), 'Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺', '◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱', script, m)
}
if (command == 'pensamiento') {
let res = await fetch("https://apimu.my.id/randomtext/katailham")
let json = await res.json()
let { result } = json.hasil
let frase = await translate(`${result}`, { to: 'es', autoCorrect: true })
conn.sendNyanCat(m.chat, frase.text, await (await fetch('https://telegra.ph/file/20f8e173cde318c845d92.jpg')).buffer(), 'Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺', '◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱', script, m)
}
if (command == 'critico') {
let res = await fetch("https://apimu.my.id/randomtext/sindiran")
let json = await res.json()
let { result } = json.hasil
let frase = await translate(`${result}`, { to: 'es', autoCorrect: true })
conn.sendNyanCat(m.chat, frase.text, await (await fetch('https://telegra.ph/file/b1644222c0b6ea691cad7.jpg')).buffer(), 'Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺', '◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱', script, m)
}
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'frase', 'dato', 'frasesabia', 'pensamiento', 'critico']
handler.register = true


export default handler
