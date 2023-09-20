let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('[➡️]𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐄𝐬𝐭𝐞 𝐜𝐡𝐚𝐭 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐩𝐞𝐫𝐦𝐢𝐬𝐨 𝐩𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐋𝐨𝐛𝐨-𝐁𝐨𝐭-𝐌𝐃')
    // } else m.reply('Aquí hay un número de host...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'chatoff'] 

handler.owner = true

export default handler
