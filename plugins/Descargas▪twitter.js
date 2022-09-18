import { twitterdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️ *_Ingrese el enlace/url de Twitter._*`
    let res = await twitterdlv2(args[0])
    const { url, quality, type } = res[1]
    await m.reply(global.wait)
    conn.sendFile(m.chat, url, 'twitter' + (type == 'image' ? '.jpg' : '.mp4'), quality, m)
}
handler.help = ['twitter'].map(v => v + ' *<url>*')
handler.tags = ['downloader']
handler.command = /^(twitter)$/i

export default handler
