import fetch from 'node-fetch'

let handler = async (m, { conn, isPrems}) => {


  let hasil = Math.floor(Math.random() * 5000)
  let time = global.db.data.users[m.sender].lastwork + 600000
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) { conn.sendNyanCat(m.chat, `*Estas cansado* y por lo tanto hay que esperar ${msToTime(time - new Date())} para volver a trabajar!`, await (await fetch('https://telegra.ph/file/0056079ce61eb0cbf5768.jpg')).buffer(), '🐱*̥₊ NʏᴀɴCᴀᴛBᴏᴛ - MD ❐🎋༉', `Tᴏᴍᴀ́ɴᴅᴏsᴇ ᴜɴ ᴄᴀғᴇᴄɪᴛᴏ☕`, script, m)
  throw false }
  let img = `${pickRandom(global.workimg)}`
  let imgwork = await (await fetch(img)).buffer()
await conn.sendNyanCat(m.chat, `‣ ${pickRandom(global.work)} *${hasil} XP*`, imgwork, '🐱*̥₊ NʏᴀɴCᴀᴛBᴏᴛ - MD ❐🎋༉', `Wᴏʀᴋ ʙʏ NʏᴀɴCᴀᴛBᴏᴛ👷🏻`, script, m)
  global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'w', 'trabajar']


handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.workimg = ["https://telegra.ph/file/2f808fabe96c12ca51ba1.jpg", "https://telegra.ph/file/6780684c8a80cbb3e8d76.jpg", "https://telegra.ph/file/03a619ca25e9d7a2f13c7.jpg", "https://telegra.ph/file/3941ff6c7712e42756c7b.jpg", "https://telegra.ph/file/47207304b6f6db3461675.jpg", "https://telegra.ph/file/d954848cd9332b1dd5c26.jpg"]

global.work = ["Trabajas como cortador de galletas y ganas", "Trabaja para una empresa militar privada, ganando", "Organiza un evento de cata de vinos y obtiene",
 "Te secuestran y te llevan a un coliseo subterráneo donde luchaste contra monstruos con personas que nunca antes habías conocido. Ganas", "Limpias la chimenea y encuentras", 
"Desarrollas juegos para ganarte la vida y ganas", 
"¿Por qué este comando se llama trabajo? Ni siquiera estás haciendo nada relacionado con el trabajo. Sin embargo, ganas", "Trabajaste en la oficina horas extras por", 
"Trabajas como secuestrador de novias y ganas", 
"Alguien vino y representó una obra de teatro. Por mirar te dieron", "Compraste y vendiste artículos y Ganaste", "Trabajas en el restaurante de la abuela como cocinera y ganas", 
"Trabajas 10 minutos en un Pizza Hut local. Ganaste", 
"Trabajas como escritor(a) de galletas de la fortuna y ganas", "Revisas tu bolso y decides vender algunos artículos inútiles que no necesitas. Resulta que toda esa basura valía", 
"Ves a alguien luchando por subir una caja a su auto, te apresuras a ayudarlo antes de que se lastime. Después de ayudarlos, amablemente te dan", 
"Desarrollas juegos para ganarte la vida y ganas", 
"Ganas un concurso de comer chili picante. ¡El premio es", 
"Trabajas todo el día en la empresa por", 
"Ayudas a moderar el grupo de NyanCatBot por", "Diseñaste un logo para *NyanCat* por", 
"Moderaste el grupo cuando *NyanCat* no estaba, el pago fue", 
"¡Trabajó lo mejor que pudo en una imprenta que estaba contratando y ganó su bien merecido!", 
"Trabajas como podador de arbustos para *Alberto* y ganas", "La demanda de juegos para dispositivos móviles ha aumentado, por lo que creas un nuevo juego lleno de micro-transacciones. Con tu nuevo juego ganas un total de", 
"Trabajas como actor de voz para Bob Esponja y te las arreglaste para ganar", 
"Estabas cultivando y Ganaste", "Trabajas como constructor de castillos de arena y ganas", "Trabajaste y Ganaste", 
"Trabajas como artista callejera y ganas","¡Hiciste trabajo social por una buena causa! por tu buena causa Recibiste", 
"Llevas mujeres a la tienda por", "Reparaste un tanque T-60 averiado en Afganistán. La tripulación te pagó", 
"Trabajas como ecologista de anguilas y ganas", "Trabajas como zoólogo y ganas", 
"Trabajas en Disneyland como un panda disfrazado y ganas", "Reparas las máquinas recreativas y recibes", 
"Hiciste algunos trabajos ocasionales en la ciudad y Ganaste", "Limpias un poco de moho tóxico de la ventilación y ganas", 
"Resolviste el misterio del brote de cólera y el gobierno te recompensó con una suma de" 
]




