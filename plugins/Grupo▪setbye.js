import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    db.data.chats[m.chat].sBye = text
    m.reply('✅ *_Se estableció el mensaje de despedida._*')
  } else throw `⚠️ Ingrese el mensaje\n@user (mención)`
}
handler.help = ['setbye *<texto>*']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
handler.owner = false

export default handler
