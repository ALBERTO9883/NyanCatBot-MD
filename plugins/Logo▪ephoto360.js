/*
- Obten mas efectos en https://violetics.pw/api/ephoto360
- Usa la apikey "beta"
*/
let handler = async (m, { conn, args, command }) => { 
let response = args.join(' ').split('|')
if (!args[0]) throw '⚠️ *_Ingrese un texto._*'
try {    
if (command == 'logocorazon') {
conn.reply(m.chat, global.wait, m)
let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=beta&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
if (command == 'logochristmas') {
conn.reply(m.chat, global.wait, m)
let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
} catch {
conn.reply(m.chat, '❎Error, porfavor vuelva a intentarlo', m)    
}}
handler.tags = ['logo']
handler.command = handler.help = ['logocorazon', 'logochristmas']
handler.register = true
export default handler
