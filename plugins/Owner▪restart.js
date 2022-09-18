let handler = async (m, { conn, isROwner, text }) => {
if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
await m.reply('*⛾ • Reiniciando...*')
process.send('reset')}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(res(tart)?)$/i
handler.rowner = true
export default handler
