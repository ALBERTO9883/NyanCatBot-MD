let handler = async (m, { conn, command, args, usedPrefix}) => { 
    try { 
        let user = global.db.data.users[m.sender]
        let wood = user.wood * 1
        let batu = user.batu * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix
        
        const buttons1 = [
            {buttonId: `${prefix}craft Caña`, buttonText: {displayText: 'Fabricar 🎣Caña'}, type: 1},
            {buttonId: `${prefix}craft pico`, buttonText: {displayText: 'Fabricar ⛏️Pico'}, type: 1},
            {buttonId: `${prefix}craft espada`, buttonText: {displayText: 'Fabricar ⚔️Espada'}, type: 1},
        ]
        
        let lmao1 = `Formato de uso *${usedPrefix}${command} [Item]*\n
Ejemplo *${usedPrefix}${command} caña de pescar*

*📌Lista de objetos para fabricar* 
🎣Caña
⛏️Pico
⚔️Espada
`.trim()
        const buttonMessage1 = {
            text: lmao1,
            footer: wm,
            buttons: buttons1,
            headerType: 1
        }
        
        switch (type) {
            case 'caña':
                if ((user.fishingrod * 1) > 0) {
                    const buttons = [
                        {buttonId: `${prefix}mejorar caña`, buttonText: {displayText: 'Mejorar 🎣Caña'}, type: 1},
                    ]
                    let lmao = `Ya tienes una caña de pescar
para mejorarlo usa *${usedPrefix}mejorar caña*`.trim()
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                
                if (wood < 30 || string < 20 || money < 10000) return m.reply(`Faltan materiales!!${wood < 30 ? `\n🪵Te falta*${30 - wood}* de madera` : ''}${string < 20 ? `\n🕸️Te falta *${20 - string}* de cuerda` : ''}${user.money < 10000 ? `\n💵Te falta *${10000 - money}* de dinero` : ''}`)
                user.fishingrod += 1
                user.wood -= 30
                user.batu -= 20
                user.money -= 10000
                user.fishingroddurability += 50
                m.reply('Has fabricado con exito una 🎣caña')
                break
            case 'pico':
                if ((user.pickaxe * 1) > 0) {
                    const buttons = [
                        {buttonId: `${prefix}mejorar pico`, buttonText: {displayText: 'Mejorar ⛏️Pico'}, type: 1},
                    ]
                    let lmao = `Ya tienes un ⛏️Pico
para mejorarlo usa *${usedPrefix}mejorar pico*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (batu < 30 || wood < 20 || money < 1500) return m.reply(`
Faltan materiales!!
${batu < 30 ? `\n🪨Te falta *${30 - batu}* de piedra` : ''}${wood < 20 ? `\n🪵Te falta *${20 - wood}* de madera` : ''}${money < 15000 ? `\n💵Te falta *${15000 - money}* de monedas` : ''}`)
                user.pickaxe += 1
                user.wood -= 20
                user.batu -= 30
                user.money -= 15000
                user.pickaxedurability += 50
                m.reply('Has fabricado con exito un ⛏️Pico')
                break
            case 'espada':
                if ((user.sword * 1) > 0) {
                    const buttons = [
                        {buttonId: `${prefix}mejorar pico`, buttonText: {displayText: 'Upgrade ⚔️Sword'}, type: 1},
                    ]
                    let lmao =`Ya tienes una ⚔️Espada, para mejorarla usa *${usedPrefix}mejorar espada*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (iron < 30 || wood < 20 || money < 10000) return m.reply(`
Faltan materiales!!
${iron < 30 ? `\n⛓️Te falta *${30 - iron}* de hierro` : ''}${wood < 20 ? `\n🪵Te falta *${20 - wood}* de madera` : ''}${money < 10000 ? `\n💵Te falta *${10000 - money}* de monedas` : ''}`)
                user.sword += 1
                user.iron -= 30
                user.wood -= 20
                user.money -= 10000
                user.sworddurability += 50
                m.reply('Has fabricado con exito una ⚔️espada')
                break
            default :
                return conn.sendMessage(m.chat, buttonMessage1, { quoted: m })
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error!!', m)
    }
}
handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft(ing)?|fabricar|craftear)$/i

handler.fail = null

export default handler
