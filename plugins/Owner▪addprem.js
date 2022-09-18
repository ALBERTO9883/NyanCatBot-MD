let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `⚠️ *_Ingrese el @tag de la persona._*`
if (global.prems.includes(who.split`@`[0])) throw '⚠️ *_Este usuario ya es premium._*'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*_• @${who.split`@`[0]} En este momento te conviertes en un usuario premium ฅ^•ﻌ•^ฅ⚘._*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem *<@user>*']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
