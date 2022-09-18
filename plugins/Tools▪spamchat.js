let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*_Ingrese el texto que se enviará como spam!_*', m)

    let pesan = `${text}`
    await m.reply('*_INICIO DE SPAM!_*\n\n*_Nota: El Bot enviará el mensaje 30 veces_*')

await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)
await conn.reply(m.chat, (pesan), fakemsg)

}
handler.help = ['spamchat'].map(v => v + ' *<texto>*')
handler.tags = ['tools']
handler.command = /^(spamchat)$/i

handler.fail = null
handler.exp = 100
handler.limit = true

export default handler
