import axios from 'axios'

let handler = async(m, {
    conn, usedPrefix, text, args, command
}) => {

    let old = new Date()
    if (!args[0]) return m.reply(`*◦Ingresa un enlace de un video de Facebook.*\n* ◦Ejemplo: *${usedPrefix + command} https: //fb.watch/hPoaWhs8af/`)
    try {
        await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
        let dlfb = await axios.get(`https://ssyoutube-api.sansekai.repl.co/api/facebook?url=${text}`)
        console.log(dlfb.data)
        conn.sendMessage(m.chat, {
            video: {
                url: dlfb.data.result.url[0].url
            },
            caption: `*🍟Fetching ∙* ${`${((new Date - old)*1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}\n*💽Calidad ∙* ${dlfb.data.result.url[0].subname}`}, { quoted: m })
        } catch (e) {
            m.reply('*_🐢 Lo siento, hubo un problema al intentar descargar el archivo._*')
        }
    }
handler.tags = ['downloader']
handler.command = ['facebook', 'facebook', 'fb']
handler.register = true

export default handler