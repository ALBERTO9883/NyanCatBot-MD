let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'NyanCatBot - MD', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'NyanCatBot estuvo aquí ^~^', 'jpegThumbnail': false }}}

  if (!text) throw `⚠️ *Ingrese el link de un grupo de WhatsApp.*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '❎ El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*Haciendo cositas malas >:) . . .*`)
  await conn.sendMessage(res, { text: global.linkgc, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.sendMessage(res, { text: global.linkgc, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res)
  await m.reply(`*Ya se spameo el grupo :D*`)
}

handler.help = ['spamgp']
handler.tags = ['owner']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
