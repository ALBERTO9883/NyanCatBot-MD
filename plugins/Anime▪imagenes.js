import axios from "axios"
let handler = async (m, {command, conn }) => {

if (command == 'cosplay') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/random/cosplay?apikey=tamvan`)
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
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/waifu2?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shota') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/shota?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'yotsuba') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/yotsuba?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shinomiya') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/shinomiya?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'yumeko') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/yumeko?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'tejina') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/tejina?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'chiho') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/chiho?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'boruto') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/boruto?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kaori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kaori?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shizuka') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/shizuka?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kaga') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kaga?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kotori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kotori?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'mikasa') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/mikasa?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'akiyama') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/akiyama?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'gremory') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/gremory?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'isuzu') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/isuzu?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shina') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/shina?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kagura') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kagura?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'shinka') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/shinka?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'eba') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/eba?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'elaina') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/elaina?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'hinata') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/hinata?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'minato') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/minato?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'sagiri') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/sagiri?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'nezuko') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/nezuko?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'rize') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/rize?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'anna') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/ana?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'deidara') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/deidara?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'yuki') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/yuki?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'asuna') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/asuna?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'ayuzawa') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/ayuzawa?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'chitoge') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/chitoge?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'emilia') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/emilia?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'hestia') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/hestia?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'inori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/inori?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'itachi') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/itachi?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'madara') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/madara?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'sakura') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/sakura?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'sasuke') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/sasuke?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'tsunade') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/tsunade?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'onepiece') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/onepiece?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'keneki') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/keneki?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'megumin') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/megumin?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'toukachan') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/toukachan?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'akira') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/akira?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'kurumi') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kurumi?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'miku') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/miku?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'itori') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/itori?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'pokemon') {
let nime = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/pokemon?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendFile(m.chat, nime.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })
}
if (command == 'loli') {
let nime = await conn.getFile(`https://api.akuari.my.id/randomimganime/loli`)
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
handler.command = handler.help = ['cosplay', 'waifu', 'waifu2', 'shota', 'yotsuba', 'shinomiya', 'yumeko', 'tejina', 'chiho', 'boruto', 'kaori', 'shizuka', 'kaga', 'kotori', 'mikasa', 'akiyama', 'gremory', 'isuzu', 'shina', 'kagura', 'shinka', 'eba', 'elaina', 'hinata', 'minato', 'naruto', 'sagiri', 'nezuko', 'rize', 'anna', 'deidara', 'yuki', 'asuna', 'ayuzawa', 'chitoge', 'emilia', 'hestia', 'inori', 'itachi', 'madara', 'sakura', 'sasuke', 'tsunade', 'onepiece', 'keneki', 'megumin', 'toukachan', 'akira', 'kurumi', 'miku', 'itori', 'pokemon', 'loli', 'neko']
handler.tags = ['nime']
handler.limit = true
handler.register = true
export default handler
