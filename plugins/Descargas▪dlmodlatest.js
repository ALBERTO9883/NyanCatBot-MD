import fetch from 'node-fetch' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️️ *_Ingrese el link de modlatest junto al comando_*`
    if (!args[0].match(/latestmodapks/gi)) throw `❎ Link incorrecto`
    
    let res = await fetch(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
    let json = await res.json()
    await conn.sendNyanCat(m.chat, `*📁 • Peso:* ${json.respon.size}\n${global.wait}`, adnyancat, botname, me, script, m)
    let { linkdl, size } = json.respon
    
conn.sendMessage(m.chat, { document: { url: linkdl }, mimetype: 'application/videos.android.package-archive', fileName: `Apk modlatest.apk` }, { quoted: m })
}
handler.help = ['dlmodlatest *<url>*']
handler.tags = ['downloader']
handler.command = ['dllatest', 'dlmodlatest'] 
handler.register = true

handler.limit = true

export default handler
