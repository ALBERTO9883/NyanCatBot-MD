import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `⚠️ *_Ingrese un -enlace/url- de Facebook._*`
try {
m.reply(global.wait)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*Aqui está su video⚘*' }, { quoted: m })
} catch (e) {
m.reply('*⚠️Error, vuelva a intentarlo*')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
