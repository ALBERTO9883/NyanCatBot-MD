import fetch from 'node-fetch' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️️ *_Ingrese un link de descarga, use el comando -searchapk- para obtener uno._*`
    if (!args[0].match(/androidapksfree.com/gi)) throw `*_❎ Link incorrecto, corrabore que el link sea igual a este:_*\nhttps://androidapksfree.com/whatsapp-messenger/com-whatsapp/`
    try {
    let res = await fetch(`https://apimu.my.id/downloader/dlapk2?link=${args[0]}`)
    let json = await res.json()
    let { linkdl, size } = json.respon
    let pp = await (await fetch('https://telegra.ph/file/e867ad919a98764a4d719.jpg')).buffer()
    await conn.sendNyanCat(m.chat, `*🎋 • Peso:* ${size}\n${global.wait}`, pp, `• Downloader Play Store🥗`, me, script, m)
    
conn.sendMessage(m.chat, { document: { url: `${linkdl}` }, mimetype: 'application/videos.android.package-archive', fileName: `apkdl2.apk` }, { quoted: m })
} catch { m.reply('⚠️ *_Resultados no encontrados._*') }
}
handler.help = ['apkdl2 *<nombre de apk>*']
handler.tags = ['downloader']
handler.command = ['dlapk2', 'apkdl2'] 
handler.register = true

handler.limit = true

export default handler
