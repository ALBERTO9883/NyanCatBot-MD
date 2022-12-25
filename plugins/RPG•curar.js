let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Tu ❤️vida esta llena!
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
tus 🥤Pociones no son suficientes, solo tienes *${user.potion}* 🥤Pociones
escribe *${usedPrefix}conprar potion ${count - user.potion}* para comprar 🥤Pociones
`.trim())
    user.potion -= count * 1
    user.health += heal * count
    m.reply(`
Usado correctamente *${count}* 🥤Pocion(es)
`.trim())
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
