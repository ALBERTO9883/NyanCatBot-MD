import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=85faf717d0545d14074659ad')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙰 𝙲𝚄𝚃𝙴', '► Cʟɪᴄᴋ ᴇɴ sɪɢᴜɪᴇɴᴛᴇ ᴘᴀʀᴀ ɪʀ ᴀ ʟᴀ sɪɢᴜɪᴇɴᴛᴇ ɪᴍᴀɢᴇɴ.', json.result.female, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], fakemsg)
conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙾 𝙲𝚄𝚃𝙴', '► Cʟɪᴄᴋ ᴇɴ sɪɢᴜɪᴇɴᴛᴇ ᴘᴀʀᴀ ɪʀ ᴀ ʟᴀ sɪɢᴜɪᴇɴᴛᴇ ɪᴍᴀɢᴇɴ.', json.result.male, [['「🔃 Sɪɢᴜɪᴇɴᴛᴇ 🔃」', `/${command}`]], fakemsg)
}
handler.help = ['mitad']
handler.tags = ['img']
handler.command = /^(par|mitad)$/i
handler.register = true
export default handler
