import fetch from 'node-fetch'
import { format } from 'util'

let handler = async (m, { text, conn, usedPrefix, command }) => {
    if (!/^https?:\/\//.test(text)) throw `⚠️ *_Ingrese la -URL- de una imagen._*\n\n*📌 Ejemplo:*\n${usedPrefix + command} https://imgur.com/O1J4KJ7.jpg`
    let _url = new URL(text)
    let url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY')
    let res = await fetch(url)
    if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
        // delete res
        throw `Content-Length: ${res.headers.get('content-length')}`
    }
    await conn.reply(m.chat, global.wait, m)
    if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m)
    let txt = await res.buffer()
    try {
        txt = format(JSON.parse(txt + ''))
    } catch (e) {
        txt = txt + ''
    } finally {
        m.reply(txt.slice(0, 65536) + '')
    }
}
handler.help = ['fetch', 'get'].map(v => v + ' *<url>*')
handler.tags = ['downloader']
handler.command = /^(fetch|get)$/i
handler.register = true

export default handler