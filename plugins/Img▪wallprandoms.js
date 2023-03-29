import fetch from 'node-fetch'
import axios from "axios"
import db from '../lib/database.js'
import translate from '@vitalets/google-translate-api'
let handler = async (m, {command, conn}) => {
let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
if (command == 'wpmontaña') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/mountain?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'pubg') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/pubg?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wpgaming') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/gaming?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wpaesthetic') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/wallhp?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'cat') {
let json = await fetch(`https://aws.random.cat/meow`)
let jsons = await json.json()
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, `${jsons.file}`, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'coffee') {
let haha = await conn.getFile(`https://coffee.alexflipnote.dev/random`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'pentol') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/pentol?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'caricatura') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kartun?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'ciberespacio') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/cyberspace?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'technology') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/teknologi?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'doraemon') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/doraemon?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'hacker') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/hekel?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wpcat') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/kucing?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'planeta') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/tatasurya?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'dog') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/anjing?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'randomprofile') {
let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/profil?apikey=${zenzapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wpaesthetic2') {
let haha = await conn.getFile(`https://api.ibeng.tech/api/wallpaper/aesthetic?apikey=tamvan`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wpvehiculo') {
let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/mobil?apikey=${zenzapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wallhp') {
let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/wallhp?apikey=${zenzapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
global.zenzapikey = ['hdiiofficial']
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'wpmoto') {
let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/motor?apikey=${zenzapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'cosplayer') {
let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/cosplay?apikey=${zenzapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'minecraft') {
let json = await fetch(`https://api.zahwazein.xyz/randomimage/minecraft?apikey=${zenzapikey}`)
let jsons = await json.json()
let { caption, image } = jsons.result
let result = await translate(caption, { to: 'es', autoCorrect: true })
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, image, 'out.png', result.text, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'patricio') {
let haha = await conn.getFile(`https://api.zahwazein.xyz/randomimage/patrick?apikey=${zenzapikey}`)
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendFile(m.chat, haha.data, 'out.png', `_${command}_`.trim(), m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}, mentions: [m.sender]}}, { quoted: m })}
if (command == 'goku') {
let json = await fetch(`https://latam-api.vercel.app/api/wpp2?apikey=nyancat&q=goku`)
let goku = await json.json()
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*◈•@${who.split("@s.whatsapp.net")[0]}*`, goku.wallpaper, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], fakemsg, { mentions: [who] })}
}
handler.command = handler.help = ['wpmontaña', 'pubg', 'wpgaming', 'wpaesthetic', 'cat', 'coffee', 'pentol', 'caricatura', 'ciberespacio', 'technology', 'doraemon', 'hacker', 'wpcat', 'planeta', 'dog', 'randomprofile', 'wpaesthetic2', 'wpvehiculo', 'wallhp', 'wpmoto', 'cosplayer', 'minecraft', 'patricio', 'goku']
handler.tags = ['img']
handler.limit = false
handler.register = true
export default handler
global.keysxxx = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
