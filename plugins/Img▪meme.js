import axios from "axios"
let handler = async (m, {command, conn}) => {
let name = await conn.getName(m.sender)
let res = await axios(pickRandom(meme))
let json = res.data
let url = json.url
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendButton(m.chat, `Tenga su meme :v`, `*◈${name}*`, url, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], fakemsg)
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
export default handler
handler.register = true

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const meme = [
"https://meme-api.herokuapp.com/gimme/memesmexico",
"https://meme-api.herokuapp.com/gimme/mememexico",
"https://meme-api.herokuapp.com/gimme/memeslatam",
"https://meme-api.herokuapp.com/gimme/memeslatinoamerica",
"https://meme-api.herokuapp.com/gimme/latammemes",
"https://meme-api.herokuapp.com/gimme/memeslatinoamerica",
"https://meme-api.herokuapp.com/gimme/latammemes",
"https://meme-api.herokuapp.com/gimme/memesmexico",
"https://meme-api.herokuapp.com/gimme/mememexico",
"https://meme-api.herokuapp.com/gimme/memeslatam",
"https://meme-api.herokuapp.com/gimme/memesmexico",
"https://meme-api.herokuapp.com/gimme/mememexico",
"https://meme-api.herokuapp.com/gimme/memeslatam",
"https://meme-api.herokuapp.com/gimme/memeslatinoamerica",
"https://meme-api.herokuapp.com/gimme/latammemes",
"https://meme-api.herokuapp.com/gimme/memeslatinoamerica",
"https://meme-api.herokuapp.com/gimme/latammemes",
"https://meme-api.herokuapp.com/gimme/memesmexico",
"https://meme-api.herokuapp.com/gimme/mememexico",
"https://meme-api.herokuapp.com/gimme/memeslatam"
]
