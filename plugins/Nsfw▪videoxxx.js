import db from '../lib/database.js'
let handler  = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
var {age} = global.db.data.users[m.sender]
   if (age <17) {
   m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`)
   throw false
	}
let res = pickRandom(asupan)
m.reply('*⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳*')
conn.sendHydrated(m.chat, `_${command}_`.trim(), `◈•${name}`, res, null, null, null, null, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], m)}
handler.help = ['videoxxx']
handler.tags = ['nsfw']
handler.command = /^videoxxx|vídeoxxx$/i
handler.register = true

export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://l.top4top.io/m_2235dduf01.mp4",
"https://a.top4top.io/m_2235268m61.mp4",
"https://b.top4top.io/m_2235k7hze2.mp4",
"https://c.top4top.io/m_2235lxohb3.mp4",
"https://d.top4top.io/m_2235jwd2e4.mp4",
"https://e.top4top.io/m_2235h5b1z5.mp4",
"https://f.top4top.io/m_2235gihcu6.mp4",
"https://l.top4top.io/m_2235dp7m41.mp4",
"https://a.top4top.io/m_2235zxue82.mp4",
"https://b.top4top.io/m_2235m3bhf3.mp4",
"https://c.top4top.io/m_2235vjyio4.mp4",
"https://d.top4top.io/m_2235m9tdu5.mp4",
"https://e.top4top.io/m_2235y2kon6.mp4",
"https://f.top4top.io/m_2235rhid57.mp4",
"https://g.top4top.io/m_2235zgsqf8.mp4",
"https://i.top4top.io/m_2235drxxg10.mp4",
"https://d.top4top.io/m_2235fzynm1.mp4",    
"https://e.top4top.io/m_22354t3zk2.mp4",
"https://f.top4top.io/m_2235gyxgh3.mp4",
"https://g.top4top.io/m_22357cmft4.mp4", 
"https://i.top4top.io/m_2235mcizm6.mp4",
"https://j.top4top.io/m_2235gwsn17.mp4",
"https://k.top4top.io/m_2235gzzjc8.mp4",
"https://a.top4top.io/m_2235l9y1310.mp4",  
"https://l.top4top.io/m_2235r1opz1.mp4",    
"https://a.top4top.io/m_22358cuuu2.mp4",
"https://b.top4top.io/m_22350c9br3.mp4",
"https://c.top4top.io/m_22355p2js4.mp4",  
"https://d.top4top.io/m_2235lv7415.mp4",
"https://e.top4top.io/m_2235q8z3f6.mp4",     
"https://b.top4top.io/m_22358oas31.mp4",
"https://c.top4top.io/m_2235xg7o62.mp4",
"https://d.top4top.io/m_2235ut91p3.mp4",
"https://e.top4top.io/m_22352ktoj4.mp4",
"https://f.top4top.io/m_2235hcqj65.mp4",
"https://g.top4top.io/m_2235j81s76.mp4", 
"https://d.top4top.io/m_2235993nu1.mp4",
"https://c.top4top.io/m_22352lrsd1.mp4",
"https://g.top4top.io/m_2235pi8791.mp4",
"https://g.top4top.io/m_22428pnh01.mp4",
"https://i.top4top.io/m_2242jpc3c1.mp4",
"https://f.top4top.io/m_2235sxi5y1.mp4"
]
