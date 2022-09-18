let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  //if (!text) throw `Elige un lugar de pesca`
  
  let { level, role, name } = global.db.data.users[m.sender]
  let username = conn.getName[m.sender]
  let user = global.db.data.users[m.sender]
  let rod = global.db.data.users[m.sender].fishingrod
  let fishingrod = global.db.data.users[m.sender].fishingrod
  let fdurability = global.db.data.users[m.sender].fishingroddurability
  let pblowfish = global.db.data.users[m.sender].blowfish
    let ptropicalfish = global.db.data.users[m.sender].tropicalfish
    let pcommonfish = global.db.data.users[m.sender].commonfish
     let pcrab = global.db.data.users[m.sender].crab
    let plocust = global.db.data.users[m.sender].locust
    let pshrimp = global.db.data.users[m.sender].shrimp
    let psquid = global.db.data.users[m.sender].squid
    let poctopus = global.db.data.users[m.sender].octopus
  let __waktur = (new Date - global.db.data.users[m.sender].lastfishing)
  let _waktur = (180000 - __waktur)
  let waktur = stime(_waktur)
  let commonfish = (rod == 1 ? Math.floor(Math.random() * (35 - 40) + 40) + 1 : '')
  let tropicalfish = (rod == 1 ? Math.floor(Math.random() * (11 - 13) + 13) + 1 : '')
  let blowfish = (rod == 1 ? Math.floor(Math.random() * (8 - 10) + 10) + 1 : '')
  let crab = (rod == 1 ? Math.floor(Math.random() * (15 - 20) + 20) + 1 : '')
  let locust = (rod == 1 ? Math.floor(Math.random() * (6 - 8) + 8) + 1 : '')
  let shrimp = (rod == 1 ? Math.floor(Math.random() * (5 - 7) + 7) + 1 : '')
  let squid = (rod == 1 ? Math.floor(Math.random() * (4 - 6) + 6) + 1 : '')
  let octopus = (rod == 1 ? Math.floor(Math.random() * (3 - 5) + 5) + 1 : '')
  let exp = (rod == 1 ? Math.floor(Math.random() * (300 - 400) + 400) + 1 : '')
  let durability = (Math.floor(Math.random() * (50 - 100) + 100) + 1)
  let ca = (rod == 0 ? 'no tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'antigua' : '' || rod == 3 ? 'corupta' : '' )
  let word = (pickRandom(['un rio 🚣‍♀', 'el mar ⛵', 'en una playa 🏖️']))
  const sections = [
{
title: `🌺 • Eres nivel: ${level}`,
rows: [
{title: "🚣‍♀ | ZONA 1", 
description: "Para pescar en esta zona debes de ser nivel 5\n•Peces de Zona 1: 🐟, 🐠, 🐡", 
rowId: `#pescar 1`},
{title: "🚣‍♀ | ZONA 2", 
description: "Para pescar en esta zona debes de ser nivel 10\n•Peces de Zona 2: 🐟, 🐠, 🦀", 
rowId: `#pescar 2`},
{title: "🚣‍♀ | ZONA 3", 
description: "Para pescar en esta zona debes de ser nivel 20\n•Peces de Zona 3: 🐟, 🦀, 🦞", 
rowId: `#pescar 3`},
{title: "🚣‍♀ | ZONA 4", 
description: "Para pescar en esta zona debes de ser nivel 30\n•Peces de Zona 4: 🦀, 🦞, 🦐", 
rowId: `#pescar 4`},
{title: "🚣‍♀ | ZONA 5", 
description: "Para pescar en esta zona debes de ser nivel 40\n•Peces de Zona 5: 🐟, 🦑, 🐙", 
rowId: `#pescar 5`},
]}, ]
const listMessage = {
text: `*🏖️ELIJA SU LUGAR DE PESCA🏖️*

*🚣‍♀ • INFO DE PESCA •*

*🌺 • Nombre:* ${username}
*📈 • Nivel:* ${level}

*🎣 Caña:* ${rod == 0 ? 'No tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'Caña ????' : '' || rod == 3 ? 'Caña ????' : '' || rod == 4 ? 'Caña ????' : '' || rod == 5 ? 'Caña ????' : ''}
*🔹 Durabilidad:* ${fdurability}%

*⛵ ABORDO DEL BARCO*

*🐠 • Tropical:* ${ptropicalfish}
*🐡 • Globo:* ${pblowfish}
*🐟 • Comun:* ${pcommonfish}
*🦀 • Cangrejo:* ${pcrab}
*🦞 • Langosta:* ${plocust}
*🦐 • Camarón:* ${pshrimp}
*🦑 • Calamar:* ${psquid}
*🐙 • Pulpo:* ${poctopus}
`,
footer: `\n• Si aún no tiene una caña escriba el comando
#craft caña`,
title: null,
buttonText: "𝕊𝔼𝕃𝔼ℂℂ𝕀𝕆ℕ𝔼 𝔸ℚ𝕌𝕀́",
sections }

  let mr = {
  m1: 'zona 1',
  m2: 'zona 2',
  m3: 'zona 3',
  m4: 'zona 4',
  m5: 'zona 5',
  }
//await conn.sendMessage(m.chat, listMessage, { quoted: fakemsg}, { mentions: [m.sender]})

  let type = (text).toLowerCase() 
  switch (type) {
  case '1':
    if (rod > 0) {
   // if (user.roddurability > 99) {
    if (user.level <= 4) throw 'Minimo nivel 5 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.fdurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.blowfish += blowfish * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${word}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${commonfish}
◦ Pez tropical: ${tropicalfish}
◦ Pez globo: ${blowfish}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
  //  } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '2':
    if (rod > 0) {
    if (user.fdurability > 15) {
    if (user.level <= 9) throw 'Minimo nivel 10 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.fdurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.crab += crab * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m2}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${blowfish}
◦ Pez tropical: ${tropicalfish}
◦ Cangrejo: ${crab}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '3':
    if (rod > 0) {
    if (user.level <= 19) throw 'Minimo nivel 20 para pescar en esta zona'
    if (user.fdurability > 99) {
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.fdurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.crab += crab * 1 
        user.locust += locust * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m3}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${blowfish}
◦ Cangrejo: ${crab}
◦ Langosta: ${locust}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '4':
    if (rod > 0) {
    if (user.fdurability > 99) {
    if (user.level <= 29) throw 'Minimo nivel 30 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.fdurability -= durability * 1
        user.crab += crab * 1 
        user.locust += locust * 1 
        user.shrimp += shrimp * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m4}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Cangrejo: ${crab}
◦ Langosta: ${locust}
◦ Camaron: ${shrimp}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '5':
    if (rod > 0) {
    if (user.fdurability > 99) {
    if (user.level <= 39) throw 'Minimo nivel 40 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.fdurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.squid += squid * 1 
        user.octopus += octopus * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m5}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${commonfish}
◦ Calamar: ${squid}
◦ Pulpo: ${octopus}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break
  default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: fakemsg})
            
  }
}

handler.help = ['pescar']
handler.tags = ['rpg']
handler.command = /^(pescar|fishing)$/i

export default handler


function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
