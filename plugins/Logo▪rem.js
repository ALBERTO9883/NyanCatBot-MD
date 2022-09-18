import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '⚠️ *_Ingrese un nombre._*'
  m.reply(global.wait)
  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `*Nice... ฅ^•ﻌ•^ฅ⚘*`, m, false)
}
handler.help = ['logorem'].map(v => v + ' *<nombre>*')
handler.tags = ['logo']
handler.command = /^(logorem)$/i
handler.limit = true

export default handler