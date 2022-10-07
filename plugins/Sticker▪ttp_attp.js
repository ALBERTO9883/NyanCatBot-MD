let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `⚠️ *_Ingrese un texto._*`
let teks = encodeURI(text)

if (command == 'attp') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}
    
if (command == 'attp2') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}

if (command == 'ttp5') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}
    
if (command == 'ttp4') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}
    
if (command == 'ttp3') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}
    
if (command == 'ttp2') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}
    
if (command == 'ttp') {
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adsticker, null, script, m)
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=85faf717d0545d14074659ad&text=${teks}`, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: linkgc, thumbnail: miniurl}}}, { quoted: m })}
    
}
handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2']
handler.tags = ['sticker']
export default handler
