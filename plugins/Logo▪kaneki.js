import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '⚠️ *_Ingrese un texto._*'
  m.reply(global.wait)
  let res = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `*Nice... ฅ^•ﻌ•^ฅ⚘*`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' *<texto>*')
handler.tags = ['logo']
handler.command = /^(logokaneki)$/i

handler.limit = true

export default handler