/* Created by https://github.com/BrunoSobrino */
       /* Diseño by Yameko-Bot V1*/

import yts from "yt-search"
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*⚠️ Falta el nombre de la canción, por favor ingrese el comando más el nombre/título de una canción.*\n\n*_📌 Ejemplo:_*\n*${usedPrefix + command} Sit Down Be Side Me*`    
try {
let imagen1 = fs.readFileSync('./storage/image/nyanbot.jpg') 
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `🌿| *Música relacionada con:* _${args.join(" ")}_`
const sections = [{
title: `🅁🄴🅂🅄🄻🅃🄰🄳🄾🅂`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '⚠️ *_Elija una opción y presione Enviar_*',
title: " 『 𝗠𝗨𝗦𝗜𝗖𝗔 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗔 』\n",
buttonText: "*[♦️ RESULTADOS ♦️]*",
sections}
const fake = { quoted: {
key : {
remoteJid: '6283136505591-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', 
orderTitle: `NyanCatBot - MD`,
thumbnail: catalogo, 
sellerJid: '0@s.whatsapp.net'}}}}
if (command == 'playlist') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)}
if (command == 'playlist2') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)} 
} catch (e) {
m.reply('❎️ *_Error, Por favor vuelva a intentarlo con otro nombre de una canción_*')
console.log(e)
}}
handler.help = ['playlist *<texto>*', 'playlist2 *<texto>*']
handler.tags = ['downloader']
handler.command = /^playlist|playlist2$/i
export default handler
