import { format } from 'util'
// let path = require('path')
import { spawn } from 'child_process'

let fontPath = 'src/font/Zahraaa.ttf'
let handler = async (m, { conn, args }) => {
    if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = true // Disable if doesnt support
    let inputPath = 'src/kertas/magernulis1.jpg'
    let d = new Date
    let tgl = d.toLocaleDateString('id-Id')
    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
    let teks = args.join` `
    // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
    let bufs = []
    const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
        'convert',
        inputPath,
        '-font',
        fontPath,
        '-fill',
        'blue',
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+78',
        hari,
        '-font',
        fontPath,
        '-fill',
        'blue',
        '-size',
        '1024x784',
        '-pointsize',
        '18',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+102',
        tgl,
        '-font',
        fontPath,
        '-fill',
        'blue',
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+344+142',
        teks,
        'jpg:-'
    ]
    spawn(_spawnprocess, _spawnargs)
        .on('error', e => m.reply(format(e)))
        .on('close', () => {
        m.reply('*⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳*')
            conn.sendFile(m.chat, Buffer.concat(bufs), 'txt.jpg', '✅ Es mejor de lo que escribes tú ✍🏻', fakemsg)
        })
        .stdout.on('data', chunk => bufs.push(chunk))
}
handler.help = ['txt *<texto>*']
handler.tags = ['fun']
handler.command = ['escribe', 'txt'] 
handler.register = true

export default handler

// BY MFARELS
// https://GitHub.com/MFarelS/
