import db from '../lib/database.js'

let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `⚠️ *_Responde a un mensaje con *${usedPrefix + command}_*`
    if (!m.quoted.fileSha256) throw '⚠️ *_Falta el SHA256 Hash Missing_*'
    if (!text) throw `⚠️️ *Falta el comando*`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ *_No tienes permiso para cambiar este comando de Sticker._*'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ Comando guardado`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <txt>')
handler.tags = ['database']
handler.command = ['setcmd']

export default handler
