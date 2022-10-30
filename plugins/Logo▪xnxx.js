import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch' 
import axios from 'axios'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '⚠️️ *_Responde a una imagen._*'
  if (!/image/.test(mime)) throw `⚠️️ *Formato no soportado*`
  if (!text) throw `⚠️️ *_Ingrese el texto que desea colocar a la imágen._*`
let img = await q.download()
let url = await uploadImage(img)
let res = await conn.getFile(`https://malesin.xyz/xnxxcard?title=${text}&image=${url}`)
conn.sendFile(m.chat, res.data, 'file', `*XD*`, m)
  }
handler.help = ['logoxnxx *<imágen/texto>*']
handler.tags = ['logo']
handler.command = ['logoxnxx'] 

export default handler

