import db from '../lib/database.js'

let handler = async (m, { conn, args, text, isOwner, usedPrefix, command }) => {
    conn.advnro = conn.advnro ? conn.advnro : {}
    if (conn.advnro[m.chat]) return m.reply('Todavía hay preguntas sin responder en este chat')
    conn.advnro[m.chat] = {
        number: (9).getRandom(),
        time: 60000,
        bonus: 350,
        opp: 4
    }
    let teks = `*Adivina el número [ 1 2 3 4 5 6 7 8 9 0 ]*

\t• Tiempo : ${(conn.advnro[m.chat].time / 1000).toFixed(2)} segundos
\t• Bono : +${conn.advnro[m.chat].bonus} Exp`
    let idmsg = await m.reply(teks)
    setTimeout(() => {
      if (conn.advnro[m.chat]) conn.reply(m.chat, `*⏰ Se acabó el tiempo !*\n\t  • Respuesta : ${conn.advnro[m.chat].number}`, m, { quoted: idmsg })
      delete conn.advnro[m.chat]
    }, conn.advnro[m.chat].time)
}

handler.help = ['advnro']
handler.tags = ['game']
handler.command = /^(advnro)$/i
handler.register = true

export default handler