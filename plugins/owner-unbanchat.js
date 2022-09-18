let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*_✅ Bot desmuteado en este chat, ahora el bot reaccionará a todos los comandos!_*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['chaton', 'unbanchat'] 
handler.owner = true

export default handler
