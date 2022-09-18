let handler = async (m, { conn, text, usedPrefix }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*❏ Desbloquear número*\n\n• _Taguear al usuario *-${usedPrefix}unblock @Tag-*_\n• _Escribir el número: *-${usedPrefix}unblock 50499698072-*_\n• _Desbloquear usuario: *-(Responde a su mensaje)-*_`, m)
    if(isNaN(number)) return conn.reply(m.chat, `*❏ Desbloquear número*\n\n• _Taguear al usuario *-${usedPrefix}unblock @Tag-*_\n• _Escribir el número: *-${usedPrefix}unblock 50499698072-*_\n• _Desbloquear usuario: *-(Responde a su mensaje)-*_`, m)
    if(number.length > 15) return conn.reply(m.chat, `*❏ Desbloquear número*\n\n• _Taguear al usuario *-${usedPrefix}unblock @Tag-*_\n• _Escribir el número: *-${usedPrefix}unblock 50499698072-*_\n• _Desbloquear usuario: *-(Responde a su mensaje)-*_`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let number = user.split('@')[0]
  
	await conn.updateBlockStatus(user, "unblock")
 	
 	conn.reply(m.chat, `⚠️ *_Desbloqueado con éxito a -@${user.split('@')[0]}-_*`, m, { mentions: [user] })

 
 }
}
handler.help = ['unblock *<@user>*']
handler.tags = ['owner']
handler.command = /^unblock$/i
handler.owner = true

export default handler