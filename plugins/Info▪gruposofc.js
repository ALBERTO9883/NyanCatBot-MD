let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de NyanCatBot-MD.*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/D2kkLywqKa0G3IfIm7eNf2_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 2 •⌉_*
  *_┃🌱❏ https://chat.whatsapp.com/Hckwp8I9JQv9f7o1DxzGJF_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 3 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/F3geMZt0qXX7udLzg3vbjJ_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 4 •⌉_*
  *_┃🌱❏ https://chat.whatsapp.com/GIpq7HI0Ee3ASPdjouwyh5_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 5 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/BbCzAbmOecYB1yt9VATAR1_*
*_╰━━━━━━━━━━━━━━━━⊜_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler