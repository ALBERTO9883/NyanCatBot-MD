let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `⚠️ *_@${room.p2.split`@`[0]} rechazó el pvp porque tuvo miedo, el juego se termina._*`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮\n\n• El juego comienza, las opciones han sido enviadas a los chats privados de @${room.p.split`@`[0]} 𝚈 @${room.p2.split`@`[0]}\n\n• Seleccionen una opción en sus chats privado, Respectivamente\n*• Elegir opción en wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let imgplay = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`    
if (!room.pilih) await conn.sendButton(room.p, 'Por favor, escoja una de las siguientes opciones', `Ganador +${room.poin}XP\nPerdedor ${room.poin_lose}XP`, imgplay, [['PIEDRA 🗿', 'Piedra'], ['PAPEL 📄', 'Papel'], ['TIJERA ✂️', 'Tijera']], m)
if (!room.pilih2) await conn.sendButton(room.p2, 'Por favor, escoja una de las siguientes opciones', `Ganador +${room.poin}XP\nPerdedor ${room.poin_lose}XP`, imgplay, [['PIEDRA 🗿', 'Piedra'], ['PAPEL 📄', 'Papel'], ['TIJERA ✂️', 'Tijera']], m)
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `⚠️ Ningún jugador tomo la iniciativa de empezar el juego, el pvp se ha cancelado`, wm, null, [['Menú 🥗', '#menu']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `⚠️ *@${(room.pilih ? room.p2 : room.p).split`@`[0]} No elegiste ninguna opción, fin del pvp*`
this.sendButton(m.chat, textnull, wm, null, [['Menú 🥗', '#menu']], m, { mentions: this.parseMention(textnull)})
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tijera/i
let b = /piedra/i
let k = /papel/i
let reg = /^(tijera|piedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] Has elegido ${m.text}, regresa al grupo y ${room.pilih2 ? `revisa los resultados*` : 'espera los resultados*'}`)
if (!room.pilih2) this.reply(room.p2, '⚠️ *_El oponente ha elegido, es tu turno de elegir!!_*', 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] Has elegido ${m.text}, regresa al grupo y ${room.pilih ? `revisa los resultados*` : 'espera los resultados*'}`)
if (!room.pilih) this.reply(room.p, '⚠️ *_El oponente ha elegido, es tu turno de elegir!!_*', 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 
this.reply(room.asal, `
*👑 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴𝙻 𝙿𝚅𝙿 👑*${tie ? '\n*• Empate!!*' : ''}

• *@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` Ganó 🥳 +${room.poin}XP*` : ` Perdió 🫡 ${room.poin_lose}XP*`}
• *@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` Ganó 🥳 +${room.poin}XP*` : ` Perdió 🫡 ${room.poin_lose}XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
