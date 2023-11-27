import axios from "axios"
let handler = async (m, {command, conn }) => {

if (command == 'cosplay') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/cosplay?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'waifu') {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error!'
conn.sendFile(m.chat, json.url, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'waifu2') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/waifu?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shota') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/shota?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'yotsuba') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/yotsuba?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'yumeko') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/yumeko?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kaori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/kaori?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shizuka') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/kaori?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kotori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/kotori?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shina') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/shina?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kaguya') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/kaguya?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shinka') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/shinka?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'elaina') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/elaina?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'anna') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/anna?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'asuna') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/asuna?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'ayuzawa') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/ayuzawa?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'inori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/inori?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'sakura') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/sakura?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'sasuke') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/sasuke?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'akira') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/akira?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'miku') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/miku?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'loli') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/sfw/loli?apikey=${ibengapi}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'neko') {
let res = await fetch('https://api.waifu.pics/sfw/neko')
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error!'
conn.sendFile(m.chat, json.url, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
}
handler.command = handler.help = ['cosplay', 'waifu', 'waifu2', 'shota', 'yotsuba', 'yumeko', 'kaori', 'shizuka', 'kotori', 'shina', 'kaguya', 'shinka', 'elaina', 'naruto', 'yuki', 'asuna', 'ayuzawa', 'inori', 'sakura', 'sasuke', 'akira', 'miku', 'loli', 'neko']
handler.tags = ['nime']
handler.cookie = true
handler.register = true
export default handler
