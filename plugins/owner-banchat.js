let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*_✅ Chat muteado, el bot no podrá reaccionar a ningun comando._*')
    // } else m.reply('Aquí hay un número de host...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'chatoff'] 

handler.owner = true

export default handler
