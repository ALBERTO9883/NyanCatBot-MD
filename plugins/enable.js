import fetch from "node-fetch"

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let chat = global.db.data.chats[m.chat]
const chatops = `━━◌*̥₊「 1 」₊*̥◌━━
*🔮 | WELCOME*
⊜ ❝Active o Desactive la Bienvenida en este grupo❞
*Ejemplo:* ${usedPrefix + command} welcome\n
━━◌*̥₊「 2 」₊*̥◌━━
*🌎 | PUBLIC*
⊜ ❝Active o Desactive para que el bot sea de uso publico y/o privado❞
*Ejemplo:* ${usedPrefix + command} public\n
━━◌*̥₊「 3 」₊*̥◌━━
*🗣 | CHATBOT*
⊜ ❝Active o Desactive para que el bot envíe mensajes,stickers y audios automáticamente❞
*Ejemplo:* ${usedPrefix + command} chatbot\n
━━◌*̥₊「 4 」₊*̥◌━━
*🔞 | NSFW*
⊜ ❝Active o Desactive para que funcionen los comandos +18❞
*Ejemplo:* ${usedPrefix + command} nsfw\n
━━◌*̥₊「 5 」₊*̥◌━━
*🌅 | AUTO STICKERS*
⊜ ❝Active o Desactive para que toda imagen, videos o link se convierta en sticker❞
*Ejemplo:* ${usedPrefix + command} autosticker\n
━━◌*̥₊「 6 」₊*̥◌━━
*💀 | ANTI-TRABAS*
⊜ ❝Active o Desactive para que la persona que envie una traba sea eliminado del grupo.❞
*Ejemplo:* ${usedPrefix + command} antitraba\n
━━◌*̥₊「 7 」₊*̥◌━━
*📛 | ANTI PRIVADO*
⊜ ❝Active o Desactive para que nadie excepto el creador pueda escribirle al privado al bot❞
*Ejemplo:* ${usedPrefix + command} antiprivado\n
━━◌*̥₊「 8 」₊*̥◌━━
*📵 | ANTI LLAMADAS*
⊜ ❝Active o Desactive para que el bot bloqueé a los que llaman al privado❞
*Ejemplo:* ${usedPrefix + command} anticall\n
━━◌*̥₊「 9 」₊*̥◌━━
*🧬 | ANTI FAKES*
⊜ ❝Active o Desactive para que el bot elimine números extranjeros❞
*Ejemplo:* ${usedPrefix + command} antifakes\n
━━◌*̥₊「 10 」₊*̥◌━━
*🔗 | ANTILINK*
⊜ ❝Active o Desactive para que el bot elimine a los que envíen enlaces de WhatsApp❞
*Ejemplo:* ${usedPrefix + command} antilink\n
━━◌*̥₊「 11 」₊*̥◌━━
*🚫 | ANTIDELETE*
⊜ ❝Active o Desactive para que el bot reenvie los mensajes eliminados❞
*Ejemplo:* ${usedPrefix + command} antidelete\n
━━◌*̥₊「 12 」₊*̥◌━━
*⏏️ | AUTOLEVELUP*
⊜ ❝Active o Desactive para subir de nivel automáticamente❞
*Ejemplo:* ${usedPrefix + command} autolevelup\n
━━◌*̥₊「 13 」₊*̥◌━━
*🔎 | DETECT*
⊜ ❝Active o Desactive la info sobre las modificaciones del grupo❞
*Ejemplo:* ${usedPrefix + command} detect\n
━━◌*̥₊「 14 」₊*̥◌━━
*👁 | ANTIVIEWONCE*
⊜ ❝Active o Desactive para reenviar los mensajes viewOnce❞
*Ejemplo:* ${usedPrefix + command} antiviewonce\n
━━◌*̥₊「 15 」₊*̥◌━━
*🛡️ | RESTRICT*
⊜ ❝Active o Desactive las restricciones para sacar gente del grupo❞
━━◌*̥₊「 16 」₊*̥◌━━
*👀 | AUTOREAD*
⊜ ❝Active o Desactive para que el bot lea automáticamente los mensajes❞
*Ejemplo:* ${usedPrefix + command} autoread\n
━━◌*̥₊「 17 」₊*̥◌━━
*⛔ | ANTI STICKERS*
⊜ ❝Active o Desactive para que el bot elimine los que mandan stickers❞
*Ejemplo:* ${usedPrefix + command} antisticker\n
━━◌*̥₊「 18 」₊*̥◌━━
*🛃 | ANTI-RAID*
⊜ ❝Active o Desactive para mostrar cuando alguien se convierte o se le quita admin❞
*Ejemplo:* ${usedPrefix + command} antiraid\n
━━◌*̥₊「 19 」₊*̥◌━━
*💬 | ONLYPV*
⊜ ❝Active o Desactive para que el bot solo se pueda utilizar en privado❞
*Ejemplo:* ${usedPrefix + command} pconly\n
━━◌*̥₊「 20 」₊*̥◌━━
*👥 | ONLYGP*
⊜ ❝Active o Desactive para que el bot solo se pueda utilizar en grupos❞
*Ejemplo:* ${usedPrefix + command} gconly\n
`


const listMessage = `≡ Lista de Opciones\n
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
┃⋄ antiraid
┃⋄ onlypv
┃⋄ onlygp
┗━━━━━━⬣`


  let isEnable = /true|enable|(turn)?on|1|activar/i.test(command)
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

case 'antiraid':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.antiRaid = isEnable
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
break
    
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
      if (!/[01]/.test(command)) return m.ftext(listMessage)
      throw false
  }
  await conn.sendNyanCat(
    m.chat,
    `⊜ *OPCIONES*

  ⤿ 🥗 *Tipo:* ${type} 
  ⤿ 🫐 *Estado:* ${isEnable ? 'Activo ✅' : 'Desactivado 🔴'}
  ⤿ 🪷 *Para:* ${isAll ? 'Este bot' : isUser ? '' : 'Este chat'}`,
await (await fetch('https://telegra.ph/file/079bb1a5c0b15a834925b.jpg')).buffer(),
    botname,
    null,
    script,
    m
  );
}
handler.help = ['en', 'dis'].map(v => v + 'able *<opcion>*')
handler.tags = ['nable']
handler.command = ['enable', 'disable', 'on', 'off', '1', '0', 'activar', 'desactivar'] 

export default handler
