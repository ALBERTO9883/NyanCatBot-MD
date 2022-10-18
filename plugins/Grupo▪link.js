import { areJidsSameUser } from '@adiwajshing/baileys'
import fetch from 'node-fetch' 
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '⚠️ Sólo se puede usar en grupos'
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants no está definido :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '✳️ No estoy en ese grupo :('
    if (!me.admin) throw '✳️ No soy administrador'
    await conn.reply(m.chat, global.wait, m)
    await conn.sendNyanCat(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), await (await fetch(pp)).buffer(), `${groupMetadata.subject}`, null, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m)
}
handler.help = ['Link']
handler.tags = ['group']
handler.command = ['link', 'linkgroup'] 


export default handler
