let handler = async (m, { conn, command, args, usedPrefix }) => { 
    try { 
        let user = global.db.data.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix
        
        const buttons1 = [
            {buttonId: `${prefix}up fishingrod`, buttonText: {displayText: `Mejorar Pesca ${rpg.emoticon('fishingrod')}`}, type: 1},
            {buttonId: `${prefix}up pickaxe`, buttonText: {displayText: `Mejorar Pico ${rpg.emoticon('pickaxe')}`}, type: 1},
            {buttonId: `${prefix}up sword`, buttonText: {displayText: `Mejorar Espada ${rpg.emoticon('sword')}`}, type: 1},
        ]
        let lmao1 = `Formato correcto *${usedPrefix}${command} [item]*
Ejemplo *${usedPrefix}${command} espada*

*📌Lista de objetos a mejorar*
${rpg.emoticon('fishingrod')}Pesca
${rpg.emoticon('pickaxe')}Pico
${rpg.emoticon('sword')}Espada
`.trim()
        const buttonMessage1 = {
            text: lmao1,
            footer: wm,
            buttons: buttons1,
            headerType: 1
        
        }
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `upgrade fishingrod`, buttonText: {displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod`}, type: 1},
                    ]
                    let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${usedPrefix}craft fishingrod*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (fishingrod > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`, wm, 'inventory', usedPrefix + 'inv', m)
                let _wood = fishingrod * 25
                let _string = fishingrod * 15
                let _money = fishingrod * 10000
                if (wood < _wood || string < _string || money < _money) return conn.sendButton(m.chat, `Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`, wm, 'inventory', usedPrefix + 'inv', m)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                conn.send2Button(m.chat, `Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`, wm, 'menu', usedPrefix + 'menu', 'inventory', usedPrefix + 'inv', m)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft pickaxe`, buttonText: {displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe`}, type: 1},
                    ]
                    let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${usedPrefix}craft Pickaxe*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (pickaxe > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let __rock = pickaxe * 25
                let __wood = pickaxe * 15
                let __money = pickaxe * 15000
                if (rock < __rock || wood < __wood || money < __money) return conn.sendButton(m.chat, `
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`, wm, 'cek inventory', usedPrefix + 'inv', m)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                conn.sendButton(m.chat, `Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`, wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'sword':
                if (sword == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft sword`, buttonText: {displayText: `Craft ${rpg.emoticon('sword')}sword`}, type: 1},
                    ]
                    let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${usedPrefix}craft sword*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (sword > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let _iron = sword * 25
                let ___wood = sword * 15
                let ___money = sword * 10000
                if (iron < _iron || wood < ___wood || money < ___money) return conn.sendButton(m.chat, `
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`, wm, 'inventory', usedPrefix + 'inv', m)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                conn.sendButton(m.chat, `Succes mengupgrade *${rpg.emoticon('sword')}Sword*`, wm, 'inventory', usedPrefix + 'inv', m)
                break
            default :
                return conn.sendMessage(m.chat, buttonMessage1, { quoted: m })
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['upgrade']
handler.tags = ['rpg']
handler.command = /^(up(grade)?|mejorar)$/i

handler.fail = null

export default handler
