import { canLevelUp, xpRange } from '../lib/levelling.js'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]

    let health = global.db.data.users[who].health
    
    let armor = global.db.data.users[who].armor
    let ardurability = global.db.data.users[who].armordurability
    let sword = global.db.data.users[who].sword
    let sdurability = global.db.data.users[who].sworddurability
    let pickaxe = global.db.data.users[who].pickaxe
    let pdurability = global.db.data.users[who].pickaxedurability
    let axe = global.db.data.users[who].axe
    let adurability = global.db.data.users[who].axedurability
    let rod = global.db.data.users[who].fishingrod
    let rdurability = global.db.data.users[who].fishingroddurability
    
    //Minerales
    let emerald = global.db.data.users[who].emerald
    let red_diamond = global.db.data.users[who].red_diamond
    let diamond = global.db.data.users[who].diamond
    let gold = global.db.data.users[who].gold
    let iron = global.db.data.users[who].iron
    let stone = global.db.data.users[who].rock
    let tminerals = (emerald + red_diamond + diamond + gold + iron + stone)
    
    //Madera
    let wood = global.db.data.users[who].wood
    
    //Frutas
    let strawberry = global.db.data.users[who].strawberry
    let watermelon = global.db.data.users[who].watermelon
    let grape = global.db.data.users[who].grape
    let kiwi = global.db.data.users[who].kiwi
    
    //Peces
    let blowfish = global.db.data.users[who].blowfish
    let tropicalfish = global.db.data.users[who].tropicalfish
    let commonfish = global.db.data.users[who].commonfish
    
    //Cofres
    let common = global.db.data.users[who].common
    let uncommon = global.db.data.users[who].uncommon
    let mythic = global.db.data.users[who].mythic
    let legendary = global.db.data.users[who].legendary
    let pet = global.db.data.users[who].pet
    
    //Mascotas 
    let fox = global.db.data.users[who].fox
    let _fox = global.db.data.users[who].foxexp
    let dog = global.db.data.users[who].dog
    let _dog = global.db.data.users[who].dogexp
    let cat = global.db.data.users[who].cat
    let _cat = global.db.data.users[who].catexp
    let horse = global.db.data.users[who].horse
    let _horse = global.db.data.users[who].horseexp
    let loro = global.db.data.users[who].loro
    let _loro = global.db.data.users[who].loroexp
    
    //Otros 
    let seed = global.db.data.users[who].seed
    let potion = global.db.data.users[who].potion
    let chest = global.db.data.users[who].chest
    let string = global.db.data.users[who].string
    let box = global.db.data.users[who].box
    let trash = global.db.data.users[who].trash

    let money = global.db.data.users[who].money
    
    let { name, exp, cookie, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = xpRange(user.level, global.multiplier)
  
    //let invt = fs.readFileSync('./storage/image/inv.png')
    if (global.db.data.users[who] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    let items = (diamond + gold + iron + stone + wood + blowfish + tropicalfish + commonfish + potion + seed + trash)
 
    let _ardurability = Math.floor((ardurability * 100) / 5000)
    let _sdurability = Math.floor((sdurability * 100) / 5000)
    let _pdurability = Math.floor((pdurability * 100) / 5000)
    let _adurability = Math.floor((adurability * 100) / 5000)
    let _rdurability = Math.floor((rdurability * 100) / 5000)

    let inv = `*Inventario de @${m.sender.split`@`[0]}*

*❤ Vida:* ${health}
*💵 Dinero:* ${shortNum(money)}
*🍪 Galletas:* ${cookie}
*📈 Nivel:* ${level}
*✨ Exp:* ${exp}

\t\t*᭥🛡️᭢ 𝔼ℚ𝕌𝕀ℙ𝔸𝕄𝕀𝔼ℕ𝕋𝕆*

*👕 Armadura de:* ${armor == 0 ? 'No tiene' : '' || armor == 1 ? 'cuero' : '' || armor == 2 ? 'hierro' : '' || armor == 3 ? 'oro' : '' || armor == 4 ? 'diamante' : '' || armor == 5 ? 'esmeralda': '' || armor == 6 ? ' olimpo' : '' || armor == 7 ? 'obsidiana' : '' || armor == 8 ? 'abisal' : '' || armor == 9 ? 'de dragón' : '' || armor == 10 ? 'celestial' : '' || armor == 11 ? 'hacker' : ''}
*🔹 Durabilidad:* ${ardurability}%

*🗡️ Espada de:* ${sword == 0 ? 'No tiene' : '' || sword == 1 ? 'madera' : '' || sword == 2 ? 'piedra' : '' || sword == 3 ? 'hierro' : '' || sword == 4 ? 'oro' : '' || sword == 5 ? 'diamante': ''|| sword == 6 ? 'diamante' : ''|| sword == 7 ? 'esmeralda' : '' || sword == 8 ? 'obsidiana' : '' || sword == 9 ? 'abisal' : '' || sword == 10 ? 'samurai sagrada' : '' || sword == 11 ? 'hacker' : ''}
*🔹 Durabilidad:* ${sdurability}%

*⛏️ Pico de:* ${pickaxe == 0 ? 'No tiene' : '' || pickaxe == 1 ? 'madera' : '' || pickaxe == 2 ? 'piedra' : '' || pickaxe == 3 ? 'hierro' : '' || pickaxe == 4 ? 'oro' : '' || pickaxe == 5 ? 'cobre': '' || pickaxe == 6 ? 'diamante' : '' || pickaxe == 7 ? 'esmeralda' : '' || pickaxe == 8 ? 'obsidiana' : '' || pickaxe == 9 ? 'netherite' : '' || pickaxe == 10 ? 'hacker' : '' || pickaxe == 11 ? 'dioses' : ''}
*🔹 Durabilidad:* ${pdurability}%

*🎣 Caña:* ${rod == 0 ? 'No tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'Caña ????' : '' || rod == 3 ? 'Caña ????' : '' || rod == 4 ? 'Caña ????' : '' || rod == 5 ? 'Caña ????' : ''}
*🔹 Durabilidad:* ${rdurability}%


\t\t*᭥🎒️᭢ 𝕀𝕋𝔼𝕄𝕊*

──────────────
*_► ⛰️ ◜Minerales◞_*
──────────────
*💎 • Diamante:* ${diamond}
*🍀 • Esmeralda:* ${emerald}
*🔩 • Hierro:* ${iron}
*🪙 • Oro:* ${gold}
*🪨 • Piedra:* ${stone}

──────────────
*_► 🫐 ◜Frutas◞_*
──────────────
*🍓 • Fresa:* ${strawberry}
*🍉 • Sandía:* ${watermelon}
*🍇 • Uva:* ${grape}
*🥝 • Kiwi:* ${kiwi}

──────────────
*_► 🐋 ◜Peces◞_*
──────────────
*🐠 • Tropical:* ${tropicalfish}
*🐡 • Globo:* ${blowfish}
*🐟 • Comun:* ${commonfish}
*🦀 • Cangrejo:* 
*🦞 • Langosta:*
*🦐 • Camarón:*
*🦑 • Calamar:*
*🐙 • Pulpo:*

──────────────
*_► 📦 ◜Cofres◞_*
──────────────
*🥡 • Común:* ${common}
*📦 • Poco común:* ${uncommon}
*🎁 • Mítico:* ${mythic}
*🧰 • Legendario:* ${legendary}
*🐾 • Caja de mascotas:* ${pet}

──────────────
*_► 🍱 ◜Otros items◞_*
──────────────
*🪵 • Madera:* ${wood}
*🧪 • Poción:* ${potion}
*🪢 • Cuerda:* ${string}
*🗑️ • Basura:* ${trash}

\t\t*᭥📊᭢ ℙℝ𝕆𝔾ℝ𝔼𝕊𝕆*
╭──────────────
│👤 *◜Tu nivel◞* ${level} ➯ ${level + 1}
│Exp: ${exp} -> ${max <= 0 ? `\n│Use ${usedPrefix}levelup para subir de nivel!` : `${max}`}
╰──────────────
╭──────────────
│🦊 *◜Zorro◞* ${fox == 0 ? 'No tiene' : '' || fox > 0 && fox < 5 ? `nivel ${fox} ➯ ${fox + 1}\n│Exp: ${_fox} -> ${fox * 100}` : '' || fox == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🐺 *◜Lobo◞* ${dog == 0 ? 'No tiene' : '' || dog > 0 && dog < 5 ? `nivel ${dog} ➯ ${dog + 1}\n│Exp: ${_dog} -> ${dog * 100}` : '' || dog == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🐱 *◜Gato◞* ${cat == 0 ? 'No tiene' : '' || cat > 0 && cat < 5 ? `nivel ${cat} ➯ ${cat + 1}\n│Exp: ${_cat} -> ${cat * 100}` : '' || cat == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🐎 *◜Caballo◞* ${horse == 0 ? 'No tiene' : '' || horse > 0 && horse < 5 ? `nivel ${horse} ➯ ${horse + 1}\n│Exp: ${_horse} -> ${horse * 100}` : '' || horse == 5 ? 'Nivel maximo' : ''}
╰──────────────
╭──────────────
│🦜 *◜Loro◞* ${loro == 0 ? 'No tiene' : '' || loro > 0 && loro < 5 ? `nivel ${loro} ➯ ${loro + 1}\n│Exp: ${_loro} -> ${loro * 100}` : '' || loro == 5 ? 'Nivel maximo' : ''}
╰──────────────
`
//conn.reply(m.chat, reText(inv), m, { mentions: [who] })

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
'title': `🎒₊• ̥ 𝗜𝗡𝗩𝗘𝗡𝗧𝗔𝗥𝗜𝗢  •̥₊🎒`,
'body': ``,
'thumbnail': global.imginv,
'sourceUrl': 'https//wa.me/50499698072' }},
'mentions': [m.sender],
'caption': inv,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}shop`, buttonText: {displayText: 'Tienda⛺'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inv|inventario)$/i

handler.restrict = true

export default handler

function reText(text) {
return text.replace(/a/g, 'α')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function priceNum(num) {
return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num).replace('.00', '').replace(/,/g, '.')
}
