let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://api.zacros.my.id/asupan/loli"
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['nime']
handler.command = /^(lolivid|lolivideos|lolívid)$/i
export default handler
handler.register = true
