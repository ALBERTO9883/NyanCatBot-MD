import db from '../lib/database.js'

let Reg = /(.*)([.|])([0-9]*)$/i
let Rname = /([A-Za-z])$/i

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  if (!Reg.test(text)) throw `Cambio de registro invalido, ingrese un "|" en medio del nombre y la edad (${usedPrefix + command} Gatito|17)`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacio, ten en cuenta que debes poner un "|" en medio del nombre y la edad (${usedPrefix + command} Gatito|17)'
  if (!age) throw 'La edad no puede estar vacía, ten en cuenta que debes poner un "|" en medio del nombre y la edad (${usedPrefix + command} Gatito|17)'
  if (!Rname.test(name)) throw 'Ingrese un nombre valido que no contenga caracteres raros (¥♧◇°€♡♤£□•...)'
  if (name.length >= 17) throw 'Ingrese un nombre valido que no tenga mas de 17 caracteres' 
  let agee = parseInt(age)
  if (agee > 50) throw '👴🏻 Wow el abuelo quiere jugar al bot'
  if (agee < 10) throw '🚼 hay un abuelo bebé jsjsjs'
  user.name = name
  user.age = agee
  m.reply(`Se cambio el nombre y la edad de tu registro\n\n *◦ Nombre:* ${name}\n *◦ Edad:* ${age} años`)
}

handler.help = ['cregistrar']
handler.tags = ['rg']
handler.command = /^(cregistrar|cregistrarse|cdaftar|cregister|creg)$/i

handler.unregr = true

export default handler