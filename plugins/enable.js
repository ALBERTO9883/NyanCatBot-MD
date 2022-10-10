import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let chat = global.db.data.chats[m.chat]

const sections = [
   {
	title: `━━◌*̥₊「 1 」₊*̥◌━━`,
	rows: [
	{title: "🔮 | WELCOME", 
	description: "⊜ ❝Active o Desactive la Bienvenida en este grupo❞",
	rowId: `${usedPrefix + command} welcome`}]}, {
	title: `━━◌*̥₊「 2 」₊*̥◌━━`,
	rows: [
	{title: "🌎 | PUBLIC", 
	description: "⊜ ❝Active o Desactive para que el bot sea de uso publico y/o privado❞",
	rowId: `${usedPrefix + command} public`}]}, {
	title: `━━◌*̥₊「 3 」₊*̥◌━━`,
	rows: [
	{title: "🗣 | CHATBOT", 
	description: "⊜ ❝Active o Desactive para que el bot envíe mensajes,stickers y audios automáticamente❞",
	rowId: `${usedPrefix + command} chatbot`}]},
	 {
	title: `━━◌*̥₊「 4 」₊*̥◌━━`,
	rows: [
	{title: "🔞 | NSFW", 
	description: "⊜ ❝Active o Desactive para que funcionen los comandos +18❞",
	rowId: `${usedPrefix + command} nsfw`}]}, {
	title: `━━◌*̥₊「 5 」₊*̥◌━━`,
	rows: [
	{title: "🌅 | AUTO STICKERS", 
	description: "⊜ ❝Active o Desactive para que toda imagen, videos o link se convierta en sticker❞",
	rowId: `${usedPrefix + command} autosticker`}]}, {
	title: `━━◌*̥₊「 6 」₊*̥◌━━`,
	rows: [
	{title: "💀 | ANTI-TRABAS", 
	description: "⊜ ❝Active o Desactive para que la persona que envie una traba sea eliminado del grupo.❞",
	rowId: `${usedPrefix + command} antitraba`}]}, {
	title: `━━◌*̥₊「 7 」₊*̥◌━━`,
	rows: [
	{title: "📛 | ANTI PRIVADO", 
	description: "⊜ ❝Active o Desactive para que nadie excepto el creador pueda escribirle al privado al bot❞",
	rowId: `${usedPrefix + command} antiprivado`}]}, {
	title: `━━◌*̥₊「 8 」₊*̥◌━━`,
	rows: [
	{title: "📵 | ANTI LLAMADAS", 
	description: "⊜ ❝Active o Desactive para que el bot bloqueé a los que llaman al privado❞",
	rowId: `${usedPrefix + command} anticall`}]}, {
	title: `━━◌*̥₊「 9 」₊*̥◌━━`,
	rows: [
	{title: "🧬 | ANTI FAKES", 
	description: "⊜ ❝Active o Desactive para que el bot elimine números extranjeros❞",
	rowId: `${usedPrefix + command} antifakes`}]}, {
	title: `━━◌*̥₊「 10 」₊*̥◌━━`,
	rows: [
	{title: "🔗 | ANTILINK", 
	description: "⊜ ❝Active o Desactive para que el bot elimine a los que envíen enlaces de WhatsApp❞",
	rowId: `${usedPrefix + command} antilink`}]}, {
	title: `━━◌*̥₊「 11 」₊*̥◌━━`,
	rows: [
    {title: "🚫 | ANTIDELETE", 
    description: "⊜ ❝Active o Desactive para que el bot reenvie los mensajes eliminados❞",
    rowId: `${usedPrefix + command} antidelete`}]}, {
	title: `━━◌*̥₊「 12 」₊*̥◌━━`,
	rows: [
	{title: "⏏️ | AUTOLEVELUP", 
	description: "⊜ ❝Active o Desactive para subir de nivel automáticamente❞",
	rowId: `${usedPrefix + command} autolevelup`}]}, {
	title: `━━◌*̥₊「 13 」₊*̥◌━━`,
	rows: [
	{title: "🔎 | DETECT", 
	description: "⊜ ❝Active o Desactive la info sobre las modificaciones del grupo❞",
	rowId: `${usedPrefix + command} detect`}]}, {
	title: `━━◌*̥₊「 14 」₊*̥◌━━`,
	rows: [
	{title: "👁 | ANTIVIEWONCE", 
	description: "⊜ ❝Active o Desactive para reenviar los mensajes viewOnce❞",
	rowId: `${usedPrefix + command} antiviewonce`}]}, {
	title: `━━◌*̥₊「 15 」₊*̥◌━━`,
	rows: [
	{title: "🛡️ | RESTRICT", 
	description: "⊜ ❝Active o Desactive las restricciones para sacar gente del grupo❞",
	rowId: `${usedPrefix + command} restrict`}]}, {
	title: `━━◌*̥₊「 16 」₊*̥◌━━`,
	rows: [
	{title: "👀 | AUTOREAD", 
	description: "⊜ ❝Active o Desactive para que el bot lea automáticamente los mensajes❞",
	rowId: `${usedPrefix + command} autoread`}]}, {
	title: `━━◌*̥₊「 17 」₊*̥◌━━`,
	rows: [
	{title: "⛔ | ANTI STICKERS", 
	description: "⊜ ❝Active o Desactive para que el bot elimine los que mandan stickers❞",
	rowId: `${usedPrefix + command} antisticker`}]}, {
	title: `━━◌*̥₊「 18 」₊*̥◌━━`,
	rows: [
	{title: "💬 | ONLYPV", 
	description: "⊜ ❝Active o Desactive para que el bot solo se pueda utilizar en privado❞",
	rowId: `${usedPrefix + command} pconly`}]}, {
	title: `━━◌*̥₊「 19 」₊*̥◌━━`,
	rows: [
	{title: "👥 | ONLYGP", 
	description: "⊜ ❝Active o Desactive para que el bot solo se pueda utilizar en grupos❞",
	rowId: `${usedPrefix + command} gconly`}]},
]
const listMessage = {
  text: ' ',
  footer: wm,
  title: `≡ Lista de Opciones\n
┏━⊜「 *📒LISTA* 」
┃⋄ welcome 
┃⋄ public 
┃⋄ chatbot 
┃⋄ nsfw
┃⋄ autosticker
┃⋄ antitraba
┃⋄ antiprivado
┃⋄ anticall 
┃⋄ antifakes 
┃⋄ antilink 
┃⋄ antidelete 
┃⋄ autolevelup 
┃⋄ detect
┃⋄ antiviewonce
┃⋄ restrict
┃⋄ autoread
┃⋄ antisticker
┃⋄ onlypv
┃⋄ onlygp
┗━━━━━━⬣`,
  buttonText: "Click Aquí",
  sections
}


  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
    case 'document':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break

case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
      
case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.chatbot = isEnable
break

case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.antiTraba = isEnable
break

case 'antifakes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.antiFake = isEnable
break

case 'antisticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.antiSticker = isEnable
break
      
case 'nsfw':
case '+18':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nsfw = isEnable          
break

case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break

case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
    
     case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
    case 'escuchar':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
    case 'autoleer':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
      throw false
  }
  conn.sendButton(m.chat, `
⊜ *OPCIONES*
┏━━━━━━━━━━━⬣
┃❏ 🗂️ *Tipo:* ${type} 
┃❏ 💠 *Estado:* ${isEnable ? 'Activo ✅' : 'Desactivado 🔴'}
┃❏ 🔅 *Para:* ${isAll ? 'Este bot' : isUser ? '' : 'Este chat'}
┗━━━━━━━━━━━⬣
`,ignyc, null, [[`${isEnable ? '🔴 Desactivar' : '✅ Activar'}`, `${isEnable ? `${usedPrefix}off ${type}` : `${usedPrefix}on ${type}`}`], ['Menú 🐢', `${usedPrefix}help`]],m)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = ['enable', 'disable', 'on', 'off', '1', '0'] 

export default handler
