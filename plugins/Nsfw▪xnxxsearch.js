import fetch from "node-fetch";
import pHeaven from "p-heaven";

let handler = async (m, { conn, usedPrefix, text, args }) => {
   if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
var {age} = global.db.data.users[m.sender]
   if (age <17) {
   m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`)
   throw false
	}
  if (!text) return m.reply("⚠️ *_Ingresa lo que deseas buscar en XNXX._*");
  await m.react("🕓");
  let results = await pHeaven.search(`${text}`, 2);
  let res = Object.values(results).map((v) => v);
  if (!res.length)
    return m.reply(
        "⚠️ *_No se encontraron resultados, intente con un nombre más Corto._*"
      )
      .then((_) => m.react("✖️"));
  let img = await (
    await fetch("https://telegra.ph/file/8d73fe5d2536a1b22d9e3.jpg")
  ).buffer();
  let txt = `*• 🔞 XNXX Search •*`;
  for (let i = 0; i < (20 <= res.length ? 20 : res.length); i++) {
    txt += `\n\n`;
    txt += `	⤿  *Nro* : ${1 + i}\n`;
    txt += `	⤿  *Link* : ${res[i]}\n`;
  }
  await conn.sendUrl(m.chat, txt, m, {
    externalAdReply: {
      mediaType: 1,
      renderLargerThumbnail: true,
      thumbnail: img,
      thumbnailUrl: img,
      title: botname,
    },
  });
  await m.react("✅");
};
handler.tags = ["nsfw"];
handler.command = handler.help = ["xnxxsearch", "searchxnxx"];
handler.register = true;
export default handler;
