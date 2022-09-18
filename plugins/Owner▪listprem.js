let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  let caption = `*⊜ USUARIOS PREMIUM🪪*
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.rowner = true
export default handler
