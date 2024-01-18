import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat, `no estás en ninguna partida de tres en raya\n\npara iniciar una nueva sala de juego, puedes usar: ${usedPrefix}ttt partida nueva`, m)
delete conn.game[room.id]
await m.reply('[ ✔ ] _se eliminó la sala de tres en raya_')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
