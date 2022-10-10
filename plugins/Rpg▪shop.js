import db from '../lib/database.js'

const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
┏━「 *NOTA DE PAGO* 」
┃⋄ *Compra nominal* : + ${count}
┃⋄ *Gastado* : -${xpperlimit * count} XP
┗━━━━━━━━━━━━━⬣`, m)
  } else conn.reply(m.chat, `❎ *_Lo siento, no tienes suficiente - XP - para comprar - ${count} - Monedas🪙_*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
