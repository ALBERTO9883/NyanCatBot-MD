import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /f$/i.test(command)
    let text = args.join` `
    let img = await (await fetch('https://telegra.ph/file/06ea3fdb002f06261fbb1.jpg')).buffer()
    if (!text) return conn.reply(m.chat, '*_🔎 Que quieres buscar en Google?_*', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        conn.sendNyanCat(m.chat, msg, img, '• Resultados Encontrados🔎', botname, script, m)
    }
}
handler.help = ['google *<buscar>*']
handler.tags = ['search']
handler.command = ['google'] 


export default handler
