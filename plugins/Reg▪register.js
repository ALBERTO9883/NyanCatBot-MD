import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Ya estás registrado\n\n¿Quiere volver a registrarse?\n\n 📌 Use este comando para eliminar su registro \n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n ✳️ Uso del comamdo: *${usedPrefix + command} nombre.edad*\n📌Ejemplo : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ El nombre no puede estar vacío'
  if (!age) throw '✳️ La edad no puede estar vacía'
  if (name.length >= 30) throw '✳️ El nombre es demasiado largo' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot'
  if (age < 5) throw '🚼  hay un abuelo bebé jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let str = `
*◈「 •📇REGISTRADO📇•」◈*
*┃›* *Nombre:* ${name}
*┃›* *Edad* : ${age} años
*┃›* *Numero de serie* :
*┃•* ${sn}
*╰━━⬣*`
conn.sendButton(m.chat, str, `${saludo}`, global.nyanregis, [['Creador 🐢', '.owner'],['Info 📌', '.infobot']], fakemsg, adgp)
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler


var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Que tengas una linda noche 🌙`; break;
                case 1: waktoonyabro = `Que tengas una linda noche 💤`; break;
                case 2: waktoonyabro = `Que tengas una linda noche 🦉`; break;
                case 3: waktoonyabro = `Que tengas una linda mañana ✨`; break;
                case 4: waktoonyabro = `Que tengas una linda mañana 💫`; break;
                case 5: waktoonyabro = `Que tengas una linda mañana 🌅`; break;
                case 6: waktoonyabro = `Que tengas una linda mañana 🌄`; break;
                case 7: waktoonyabro = `Que tengas una linda mañana 🌅`; break;
                case 8: waktoonyabro = `Que tengas una linda mañana 💫`; break;
                case 9: waktoonyabro = `Que tengas una linda mañana ✨`; break;
                case 10: waktoonyabro = `Que tengas un lindo dia 🌞`; break;
                case 11: waktoonyabro = `Que tengas un lindo dia 🌨`; break;
                case 12: waktoonyabro = `Que tengas un lindo dia ❄`; break;
                case 13: waktoonyabro = `Que tengas un lindo dia 🌤`; break;
                case 14: waktoonyabro = `Que tengas una linda tarde 🌇`; break;
                case 15: waktoonyabro = `Que tengas una linda tarde 🥀`; break;
                case 16: waktoonyabro = `Que tengas una linda tarde 🌹`; break;
                case 17: waktoonyabro = `Que tengas una linda tarde 🌆`; break;
                case 18: waktoonyabro = `Que tengas una linda noche 🌙`; break;
                case 19: waktoonyabro = `Que tengas una linda noche 🌃`; break;
                case 20: waktoonyabro = `Que tengas una linda noche 🌌`; break;
                case 21: waktoonyabro = `Que tengas una linda noche 🌃`; break;
                case 22: waktoonyabro = `Que tengas una linda noche 🌙`; break;
                case 23: waktoonyabro = `Que tengas una linda noche 🌃`; break;
            }
            var saludo = "" + waktoonyabro;
