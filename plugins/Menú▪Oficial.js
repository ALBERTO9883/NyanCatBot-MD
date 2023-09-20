import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
let prem = global.prems.includes(m.sender.split`@`[0])
let tags = {
  'main': '𝐌𝐞𝐧𝐮𝐬📒',
  'info': '𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧👨‍💻',
  'search': '𝐁𝐮𝐬𝐪𝐮𝐞𝐝𝐚𝐬🔎',
  'game': '𝐉𝐮𝐞𝐠𝐨𝐬🕹️',
  'xp': '𝐍𝐢𝐯𝐞𝐥 𝐲 𝐞𝐜𝐨𝐧𝐨𝐦𝐢𝐚⚖️',
  'rpg': '𝐑𝐏𝐆⚔',
  'rg': '𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐨🗃️',
  'sticker': '𝐒𝐭𝐢𝐜𝐤𝐞𝐫☃️,
  'frases': '𝐅𝐫𝐚𝐬𝐞𝐬🥀',
   'img': '𝐈𝐦𝐚𝐠𝐞𝐧𝐞𝐬🪴',
  'group': '𝐆𝐫𝐮𝐩𝐨👻',
  'logo': '𝐌𝐚𝐫𝐤𝐞𝐫 𝐲 𝐥𝐨𝐠𝐨𝐬📝',
  'nable': '𝐃𝐞𝐬/𝐀𝐜𝐭𝐢𝐯𝐚𝐫 𝐨𝐩𝐜𝐢𝐨𝐧𝐞𝐬⚙️', 
  'premium': '𝐏𝐫𝐞𝐦𝐢𝐮𝐦💸,
  'nime': '𝐀𝐧𝐢𝐦𝐞㊗',
  'downloader': '𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬📥',
  'tools': '𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬🧰',
  'fun': '𝐃𝐢𝐯𝐞𝐫𝐬𝐢𝐨́𝐧🎭',
  'database': '𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬🗄️',
  'nsfw': '𝐍𝐬𝐟𝐰🔞', 
  'owner': '𝐂𝐫𝐞𝐚𝐝𝐨𝐫💻, 
  'advanced': '𝐀𝐯𝐚𝐧𝐳𝐚𝐝𝐨🖥️',
  'audio': '𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐚𝐮𝐝𝐢𝐨𝐬🔊', 
}
const defaultMenu = {
  before: `
┏━「✰𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗✰」━⊜
┃⋄ 🕒 𝐇𝐨𝐫𝐚: %time
┃⋄ 🗓 𝐅𝐞𝐜𝐡𝐚: %date
┃⋄ ☀️ 𝐃𝐢𝐚: %week
┗━━◘

┏━━⊜ 𝐈𝐧𝐟𝐨 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 ━⊜
┃⋄ 📇 𝐍𝐨𝐦𝐛𝐫𝐞:  %taguser
┃⋄ 🪙 𝐌𝐨𝐧𝐞𝐝𝐚𝐬: %limit
┃⋄ ⬆️ 𝐍𝐢𝐯𝐞𝐥: %level (%exp / %maxexp) 
┃⋄ 🔮 𝐄𝐱𝐩: %totalexp
┃⋄ 🃏 𝐑𝐨𝐥: %role
┃⋄ 🪪 𝐏𝐫𝐞𝐦𝐢𝐮𝐦: ${prem ? '✅' : '❌'}
┗━━◘

┏━━⊜ *_INFO BOT_* ━⊜
┃⋄ 👤 𝐎𝐰𝐧𝐞𝐫: @50576390682
┃⋄ 💻 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: %version
┃⋄ 🪁 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬: %totalreg
┃⋄ 🗃️ 𝐋𝐢𝐛: Baileys-MD
┃⋄ 🕹️ 𝐌𝐨𝐝𝐨: ${global.opts['self'] ? 'Privado': 'Público'}
┃⋄ ⏲️ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨: %uptime
┗━━◘
%readmore
┏━━━━━━━━━━━━━━┓
┃⋄ 𝐂𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐢́𝐬𝐭𝐢𝐜𝐚𝐬 𝐝𝐞𝐥 𝐌𝐞𝐧𝐮́
┃
┃ •🪪 = 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┃ •🪙 = 𝐌𝐨𝐧𝐞𝐝𝐚𝐬
┗━━━━━━━━━━━━━━┛\n
  ≡ \`\`\`LISTA DE MENUS\`\`\`
`.trimStart(),
  header: '┏━⊜「 %𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢 」',
  body: '*┃›* %cmd %islimit %isPremium',
  footer: '*┗━⬣*\n',
  after: '',
}

  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
     let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '◜🪙◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🪪◞' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

                await conn.sendMessage(m.chat, { react: { text: '🐱', key: m.key }})
                await conn.sendUrl(m.chat, text.trim(), m, {
         externalAdReply: {
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: imgmenu,
            thumbnailUrl: imgmenu,
            title: botname,
         },
         mentionedJid: conn.parseMention(text.trim())
      })

  } catch (e) {
    conn.reply(m.chat, '[⛔] 𝐋𝐨 𝐬𝐞𝐧𝐭𝐢𝐦𝐨𝐬, 𝐄𝐥 𝐦𝐞𝐧𝐮 𝐭𝐢𝐞𝐧𝐞 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫.', m)
    throw e
  }
}

handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'una linda noche 🌙'; break;
  case 1: hour = 'una linda noche 💤'; break;
  case 2: hour = 'una linda noche 🦉'; break;
  case 3: hour = 'una linda mañana ✨'; break;
  case 4: hour = 'una linda mañana 💫'; break;
  case 5: hour = 'una linda mañana 🌅'; break;
  case 6: hour = 'una linda mañana 🌄'; break;
  case 7: hour = 'una linda mañana 🌅'; break;
  case 8: hour = 'una linda mañana 💫'; break;
  case 9: hour = 'una linda mañana ✨'; break;
  case 10: hour = 'un lindo dia 🌞'; break;
  case 11: hour = 'un lindo dia 🌨'; break;
  case 12: hour = 'un lindo dia ❄'; break;
  case 13: hour = 'un lindo dia 🌤'; break;
  case 14: hour = 'una linda tarde 🌇'; break;
  case 15: hour = 'una linda tarde 🥀'; break;
  case 16: hour = 'una linda tarde 🌹'; break;
  case 17: hour = 'una linda tarde 🌆'; break;
  case 18: hour = 'una linda noche 🌙'; break;
  case 19: hour = 'una linda noche 🌃'; break;
  case 20: hour = 'una linda noche 🌌'; break;
  case 21: hour = 'una linda noche 🌃'; break;
  case 22: hour = 'una linda noche 🌙'; break;
  case 23: hour = 'una linda noche 🌃'; break;
}
  var greeting = "Espero que tengas " + hour;
