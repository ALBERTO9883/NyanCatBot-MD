import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
const potion = 520
const Spotion = 150 
const limit = 350
const Slimit = 100
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500 
const Slegendary = 3000
const Btrash = 10
const Strash = 2
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const _sword = global.db.data.users[m.sender].sword
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
const _pickaxe = global.db.data.users[m.sender].pickaxe
   const pickaxe = (_pickaxe == 0 ? 20000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 99999 : '' || _pickaxe == 3 ? 149999 : '' || _pickaxe == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
🛒ARTICULOS PARA COMPRAR🛍️\n
*Ítems | Precio de compra*\n
• 🛡️ Armadura:   ${armor}
• 🗡️ Espada:   ${sword}
• 🧪 Pocion:   ${potion}
• ✨ Limit:   ${limit}
• 💎 Diamante:   ${Bdiamond}
• 📦 Comun:   ${Bcommon}
• 🛍️ Raro:   ${Buncommon}
• 🗃️ Mítico:   ${Bmythic}
• 🎁 Legendario:   ${Blegendary}
• 🗑️ basura:   ${Btrash}
\n
✅ Ejemplos de uso: ${usedPrefix}comprar pocion 1\n
*Ítems | Precio de venta*\n
• 🧪 Pocion:   ${Spotion}
• ✨ Limit:   ${Slimit}
• 💎 Diamante:   ${Sdiamond}
• 📦 Comun:   ${Scommon}
• 🛍️ Raro:   ${Suncommon}
• 🗃️ Mítico:   ${Smythic}
• 🎁 Legendario:   ${Slegendary}
• 🗑️ basura:   ${Strash}\n
✅ Ejemplo de uso: ${usedPrefix}vender pocion 1 
`.trim()
let buttonMessage= {
'document': { url: `https://github.com/ALBERTO9883` },
'mimetype': `application/pdf`,
'fileName': `🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/ALBERTO9883',
'mediaType': 2,
'previewType': 'pdf',
'title': `🌺₊• ̥ 𝗧𝗜𝗘𝗡𝗗𝗔 𝗥𝗣𝗚 •̥₊🌺`,
'body': ``,
'thumbnail': global.imgshop,
'sourceUrl': 'https//wa.me/50499698072' }},
'mentions': [m.sender],
'caption': Kchat,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}inv`, buttonText: {displayText: 'Inventario🎒'}, type: 1},
{buttonId: `${usedPrefix}daily`, buttonText: {displayText: 'Claim✨'}, type: 1}
],
'headerType': 6 }
    try {
        if (/shop|tienda/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const trash = global.db.data.users[m.sender].trash
            switch (jualbeli) {
            case 'buy|comprar':
                switch (_type) {
                    case 'pocion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Compraste con exito ${count}  pocion/es precio de ${potion * count} dinero\n\nUsa pociones escribiendo: *${usedPrefix}use pocion <número>*`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar ${count} Pocion/es a precio de  ${potion * count} dinero`,)
                        break
                    case 'limit':
                             if (global.db.data.users[m.sender].exp >= limit * count) {
                             	global.db.data.users[m.sender].exp -= limit * count
                                 global.db.data.users[m.sender].limit += count * 1
                                 conn.reply(m.chat, `Compraste con exito ${count} limit por ${limit * count} exp`, m)
                              } else conn.reply(m.chat, `Tu experiencia no es suficiente para comprar ${count} limit por ${limit * count} exp`, m)
                           break
                    case 'diamante':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Compraste con exito ${count} Diamante(s) por ${Bdiamond * count} monedas`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente`, m)
                        
                        break
                    case 'comun':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Compraste con exito ${count} caja(s) comun(es) por ${Bcommon * count} monedas`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar ${count} caja(s)s comun(es) por ${Bcommon * count} dinero\n\nAbre la caja escribiendo: *${usedPrefix}abrir comun*`, m)
                        
                        break
                    case 'raro':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Compraste con exito ${count} caja(s) rara(s) por ${Buncommon * count} monedas`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar ${count} caja(s) comun(es) por ${Buncommon * count} monedas\n\nAbre la caja escribiendo: *${usedPrefix}abrir raro*`, m)
                        
                        break
                    case 'mitico':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Compraste con exito ${count} Cofre mitico por ${Bmythic * count} monedas`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} caja(s) mitica(s) por ${Bmythic* count} monedas\n\nAbre la caja escribiendo: *${usedPrefix}abrir mitico*`, m)
                        
                        break
                    case 'legendario':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Compraste con exito ${count} caja(s) legendarias por ${Blegendary * count} monedas`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} caja(s) legendarias por ${Blegendary * count} monedas\n\nAbre la caja escribiendo: *${usedPrefix}abrir legendario*`, m)
                        
                        break
                    case 'basura':
                            if (global.db.data.users[m.sender].money >= Btrash * count) {
                                global.db.data.users[m.sender].trash += count * 1
                                global.db.data.users[m.sender].money -= Btrash * count
                                conn.reply(m.chat, `Compraste con exito ${count} de basura por ${Btrash * count} monedas`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} de Basura por ${Btrash * count} monedas`.trim(), m)
                        
                        break
                    case 'espada':
                            if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Tu espada ya esta *Nvl Max*', m)
                            if (global.db.data.users[m.sender].money > sword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].money -= sword * 1
                                conn.reply(m.chat, `Compraste con exito una espada por ${sword} monedas` ,m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar una espada por ${sword} monedas`, m)
                     
                        break
                    case 'armadura':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Tu armadura ya esta *Nivel Max*', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Compraste con exito una armadura por ${armor} monedas` ,m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una armadura por ${armor} dinero`, m)
                        break
                    default:
                        return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'sell|vender': 
                switch (_type) {
                    case 'pocion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Conpraste con exito ${count} al precio de ${Spotion * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tus pociones no son suficientes`.trim(), m)
                        break
                   case 'limit':
                       if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].exp += Slimit * count
                            global.db.data.users[m.sender].limit -= count * 1
                            conn.reply(m.chat, `Compraste con exito ${count} limit a precio de ${Slimit * count} exp`.trim(), m)
                         } else conn.reply(m.chat, `Tus límit no son suficientes`.trim(), m)
                         break
                    case 'comun':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} Caja(s) común(es) por ${Scommon * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tus Caja(s) Común(es) no son suficientes`.trim(), m)
                        break
                    case 'raro':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja(s) rara(s) al precio de ${Suncommon * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tu(s) caja(s) rara(s) no son suficientes`.trim(), m)
                        break
                    case 'mitico':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja(s) mitica(s) por ${Smythic * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tu(s) Caja(s) Mítica(s) no son suficientes`.trim(), m)
                        break
                    case 'legendario':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja(s) comun(es) por ${Slegendary * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tu(s) caja(s) legendaria(s) no son suficientes`.trim(), m)
                        break
                    case 'basura':
                        if (global.db.data.users[m.sender].trash >= count * 1) {
                            global.db.data.users[m.sender].trash -= count * 1
                            global.db.data.users[m.sender].money += Strash * count
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} de basura, y obtienes ${Strash * count} monedas`, m)
                        } else conn.reply(m.chat, `Tu basura no es suficiente`, m)
                        break
                    case 'diamante':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} diamantes, y obtienes ${Sdiamond * count} monedas`, m)
                        } else conn.reply(m.chat, `Tus diamantes no son suficientes`, m)
                        break
                    default:
                        return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
            default:
                return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        } else if (/buy|comprar/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'pocion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Compraste con exito ${count} Pocion(es) a precio de ${potion * count} monedas\n\n*Usa la pocion escribiendo: ${usedPrefix}usar pocion <cantidad>*`, m)
                        } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count}  ${potion * count} monedas`,m)
                    
                    break
               case 'limit':
                        if (global.db.data.users[m.sender].exp >= limit * count) {
                        	global.db.data.users[m.sender].exp -= limit * count
                            global.db.data.users[m.sender].limit += count * 1
                            conn.reply(m.chat, `Compraste con exito ${count} a precio de ${limit * count} exp`, m)
                         } else conn.reply(m.chat, `Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`, m)
                         break
                case 'diamante':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Compraste con exito ${count} Diamante(s) por ${Bdiamond * count} monedas`, m)
                        } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                    
                    break
                case 'comun':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Compraste con exito  ${count} caja comun a precio de ${Bcommon * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'raro':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Compraste con exito ${count} caja rara a precio de ${Buncommon * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mitico':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Compraste con exito ${count} caja/s mitica/s a precio de ${Bmythic * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendario':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Compraste con exito ${count} caja/s legendaria/s a precio de ${Blegendary * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'basura':
                        if (global.db.data.users[m.sender].money >= Btrash * count) {
                            global.db.data.users[m.sender].trash += count * 1
                            global.db.data.users[m.sender].money -= Btrash * count
                            conn.reply(m.chat, `Compraste con exito ${count} Basura a precio de ${Btrash * count} dinero`, m)
                        } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} Basura por ${Btrash * count} mlnedas`.trim(), m)
                    
                    break
                case 'espada':
                        if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > sword * 1) {
                            global.db.data.users[m.sender].sword += 1
                            global.db.data.users[m.sender].money -= sword * 1
                            conn.reply(m.chat, `Compraste con exito una espada a precio de ${sword} dinero` ,m)
                          
                        } else conn.reply(m.chat, `No tienes suficiente dinero para comprar una espada por ${sword} monedas`, m)
                    
                    break
                case 'armadura':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Compraste con exito una armadura por ${armor} monedas` ,m)
                          
                        } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una armadura ${armor}`, m)
                    
                    break
                default:
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
 
                    break
             case 'pickaxe':
                        if (lobal.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Tu pico esta a nivel maximo', m)
                        if (lobal.db.data.users[m.sender].money > pickaxe * 1) {
                            lobal.db.data.users[m.sender].pickaxe += 1
                            lobal.db.data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            lobal.db.data.users[m.sender].money -= pickaxe * 1
                            conn.reply(m.chat, `Compraste un pico por ${pickaxe} de dinero` ,m)
                          
                        } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar un pico que cuesta ${pickaxe} de dinero`, m)
                        break
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        } else if (/sell|vender|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'pocion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} pocion/es al precio de ${Spotion * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus pociones no son suficientes`.trim(), m)
                    break
                case 'limit':
                    if (global.db.data.users[m.sender].limit >= count * 1) {
                        global.db.data.users[m.sender].exp += Slimit * count
                        global.db.data.users[m.sender].limit -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} limit a precio de ${Slimit * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Tu límite no es suficiente`.trim(), m)
                    break
                case 'comun':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja/s comun/es a precio de ${Scommon * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas comunes no son suficientes `.trim(), m)
                    break
                case 'raro':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Venta exitosa vendiste ${count} cajs/s rara/s a precio de ${Suncommon * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas raras no son suficientes`.trim(), m)
                    break
                case 'mitico':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja/s mitica/s a precio de ${Smythic * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas miticas no son suficientes`.trim(), m)
                    break
                case 'legendario':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja/s lendaria/s a precio de ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas legendarias no son suficientes`.trim(), m)
                    break
                case 'basura':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[m.sender].money += Strash * count
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} basura, y obtienes ${Strash * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tu basura no es suficiente `.trim(), m)
                    break
                case 'diamante':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} diamantes, y obtienes ${Sdiamond * count} dinero`, m)
                    } else conn.reply(m.chat, `Tus diamantes no son suficientes `, m)
                    break
                default:
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        }
    } catch (e) {
        conn.sendMessage(m.chat, buttonMessage, { quoted: m })
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['tienda <vender|comprar> <item>', 'shop <buy|sell> <item>']
handler.tags = ['rpg']
    
handler.command = /^(shop|tienda|vender|sell|comprar)$/i
export default handler
