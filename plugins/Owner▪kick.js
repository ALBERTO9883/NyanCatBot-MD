import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let kickedUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
            kickedUser.concat(res)
            await delay(1 * 1000)
        }
    m.reply(`✅ *_Usuario eliminado correctamente_* ${kickedUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: kickedUser })

}
handler.help = ['kick', '-'].map(v => 'o' + v + ' *@user*')
handler.tags = ['owner']
handler.command = /^(okick|o-)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))