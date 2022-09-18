import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import db from '../lib/database.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┏━⊜ *NIVEL*
┃⋄ *Nombre :* *_${name}_*
┃⋄ *Nivel :* *_${user.level}_*
┃⋄ *XP :* *_${user.exp - min}/${xp}_*
┗━━━━━━━━━━━⬣

Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho   Nivel:\n${conn.getName(m.sender)}`
        let str = `
┏━⊜ *LEVEL UP*
┃⋄ *Nivel anterior :* *_${before}_*
┃⋄ *Nivel actual :* *_${user.level}_*
┗━━━━━━━━━━━⬣

*_📌 Cuanto más interactúes con el bot, mayor será tu nivel :3_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
