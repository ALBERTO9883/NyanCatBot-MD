let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('[➡️] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐄𝐬𝐭𝐞 𝐜𝐡𝐚𝐭 𝐲𝐚 𝐭𝐢𝐞𝐧𝐞 𝐩𝐞𝐫𝐦𝐢𝐬𝐨 𝐩𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐋𝐨𝐛𝐨-𝐁𝐨𝐭-𝐌𝐃')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['chaton', 'unbanchat'] 
handler.owner = true

export default handler
