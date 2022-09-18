import db from '../lib/database.js'

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (!m.text || !/^▢ CUANTO ES/i.test(m.text)) return !0
    if (!m.isGroup)
        return !1
    let id = m.chat
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let math = m.text.replace('▢ CUANTO ES *', '').replace(`*=\n\n_Tiempo:_ 30.00 segundos\n\n🎁 Recompensa : 50000 XP`, '').replace('÷', '/')
    let val = math
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    let result = (new Function('return ' + val))()
   if (!result) throw result
    await m.reply(`${result}`)
  } catch (e) {
    if (e == undefined) throw !0
  }
}