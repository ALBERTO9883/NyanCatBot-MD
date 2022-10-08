let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*_⚠️ Ingrese el nombre que desea colocar al grupo._*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*_⚠️ No se pudo completar la acción por un error inesperado._*'
}}
handler.help = ['setname *<texto>*']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
