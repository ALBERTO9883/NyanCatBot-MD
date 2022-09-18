let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'A quien quiere advertirle?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Etiquete a un usuario'
    if (!(mention in global.db.data.users)) throw 'El usuario no está registrado en la base de datos'
    let user = global.db.data.users[mention]
    if (user.banned) throw 'El usuario a sido baneado'
    if ((user.warn * 1) < 3) {
        user.warn += 1
        m.reply('Fuiste advertido por mi creador')
        await m.reply('O moderador, y ahora tienes *' + (user.warn + 1) + '* Advertencias. Has sido baneado por recibir 4 advertencias', mention)
    } else if ((user.warn * 1) > 2) {
        let reason = (args.length > 0 || args[1] ? args.slice(1).join(' ') : '4 kali WARN') || '4 kali WARN'
        user.banned = true
        user.bannedReason = reason
        user.warn = 0
        m.reply('*Has sido baneado por recibir 4 advertencias*')
        await m.reply('*Estas baneado por recibir 4 advertencias*\n *CONTACTO* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
    }
}

handler.help = ['warn *@mención*']
handler.tags = ['owner']
handler.command = /^warn(user)?$/i
handler.mods = true

export default handler