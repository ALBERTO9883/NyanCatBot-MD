import fs from 'fs'
let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '⚠️ *_Por favor ingrese el numero que dese enviar el spam de mensaje_*\n*#spamwa numero|texto|cantidad*'
if (!pesan) throw '⚠ *_️Por favor ingrese el mensaje a enviar #spamwa numero|texto|cantidad._*'
if (jumlah && isNaN(jumlah)) throw '*🔢 La cantidad debe ser un número!*'

  let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
  let fixedJumlah = jumlah ? jumlah * 1 : 10
  if (fixedJumlah > 50) throw '⚠ *_Demasiados mensajes!! ingrese una cantidad por debajo de 50 mensajes._*️'
  await m.reply(`*[❗] Spam de mensajes al número ${nomor} realizado con exito*\n*Cantidad enviada: ${fixedJumlah} veces!*`)
  for (let i = fixedJumlah; i > 1; i--) {
  if (i !== 0) conn.reply(fixedNumber, pesan.trim(), estilo)
  }
}
handler.help = ['spamwa *<número>|<texto>|<# de mensajes>*']
handler.tags = ['premium']
handler.command = /^spam(wa)?$/i

handler.group = false
handler.premium = true
handler.private = false
handler.register = true

export default handler
