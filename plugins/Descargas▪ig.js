/* Creado por https://github.com/FG98F */

import fg from 'api-dylux'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*_📌️ Uso del comamdo_*\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
    let res = await fg.igdl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'igdl.mp4', ``, m)}}
handler.help = ['instagram *<link ig>*']
handler.tags = ['downloader']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.register = true
handler.limit = true

export default handler 
