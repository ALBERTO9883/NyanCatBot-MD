let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ *_Se configuro el mensaje de bienvenida._*')
  } else throw `⚠️ Ingrese el mensaje de Bienvenida\n\n@user (mención)\n@group (Nombre de grupo)\n@desc (description de grupo)\n@bio (Biografía)\n@time (Hora local)\n@date (Fecha)`
}
handler.help = ['setwelcome *<text>*']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
