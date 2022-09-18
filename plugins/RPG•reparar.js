let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*「 R E P A R A R 」*`

  let caption = `
▧ Pico ⛏️
▧ Espada ⚔️
▧ Caña de pescar 🎣

*❏ Receta*
▧ Pico ⛏️
〉 5 Madera
〉 3 Piedra
〉 3 Metal
〉 1 Diamantes

▧ Espada ⚔️
〉 5 Madera
〉 9 Metal
〉 1 Diamante

▧ Armadura 🥼
〉 15 Metal
〉 3 Diamante
`
const sections = [
   {
	title: "REPARAR OBJETOS",
	rows: [
	    {title: "ESPADA ⚔️", rowId: ".reparar espada", description: "Reparar Espada"},
	    {title: "PICO ⛏️", rowId: ".reparar pico", description: "Reparar Pico"},
	    {title: "ARMADURA 🥼", rowId: ".reparar armadura", description: "Reparar Armadura"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "R E P A R A R",
  sections
}

  try {
    if (/reparar/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pico':
          if (user.pickaxedurability > 99) return m.reply('Esta herramienta no tiene daños.')
          if (user.pickaxe == 0) return m.reply('Aun no eres dueño de esto')
            if(user.diamond < 1 || user.rock < 3 || user.wood < 5 || user.iron < 3 ) return m.reply(`No hay suficientes items!`)
             user.rock -= 3
             user.wood -= 5
             user.iron -= 3
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Reparación exitosa!")
            break
          case 'espada':
          if (user.sworddurability > 99) return m.reply('Esta herramienta no tiene daños.')
          if (user.sword == 0) return m.reply('Aun no eres dueño de esto')
            if(user.diamond < 1 || user.wood < 5 || user.iron < 9 ) return m.reply(`Barang tidak cukup!`)
             user.wood -= 5
             user.iron -= 9
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Reparación exitosa!")
            break
            case 'armadura':
          if (user.armordurability > 99) return m.reply('Esta herramienta no tiene daños.')
          if (user.armor == 0) return m.reply('Aun no eres dueño de esto')
            if(user.diamond < 3 || user.iron < 15 ) return m.reply(`Barang tidak cukup!`)
             user.iron -= 15
             user.diamond -= 3
             user.armordurability = 100
            m.reply("Reparación exitosa!")
            break
          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(reparar)/i

export default handler
