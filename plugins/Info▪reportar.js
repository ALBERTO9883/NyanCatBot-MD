let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '⚠ *_️Ingrese el error ue desea reportar._*'
    if (text.length < 10) throw '✉️ *_Especifique bien el error, mínimo 10 caracteres._*'
    if (text.length > 1000) throw '✉️ *_Máximo 1000 caracteres para enviar el error._*'
    let teks = `*[ REPORTE ]*\n\n*• Usuario:* @${m.sender.split`@`[0]}\n*• Texto:* ${text}`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    m.reply('📤 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐥𝐨𝐬 𝐨𝐰𝐧𝐞𝐫𝐬 𝐝𝐞 𝐋𝐨𝐛𝐨-𝐁𝐨𝐭-𝐌𝐃 , 𝐒𝐢 𝐞𝐥 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐞𝐬 𝐟𝐚𝐥𝐬𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞𝐫𝐚 𝐢𝐠𝐧𝐨𝐫𝐚𝐝𝐨')
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = /^(report|reportar|bug|error)$/i

export default handler
