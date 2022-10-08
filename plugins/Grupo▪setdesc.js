let handler = async (m, { text }) => {

if(!text) throw '*_⚠️ Ingrese la descripción que desea colocar en este grupo._*'
  
 await conn.groupUpdateDescription(m.chat, text)
  return m.reply("*_La descripción del grupo ha sido cambiada con éxito.🐢_*")
}

handler.help = ['setdesc', 'sdesc']
handler.tags = ['group']
handler.command = /^(setdesc|sdesc)$/i

handler.group = true
handler.admin = true

export default handler
