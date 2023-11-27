import db from "../lib/database.js";
import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command }) => {
  let name = await conn.getName(m.sender);
  if (!global.db.data.chats[m.chat].nsfw && m.isGroup)
    throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`;
  var { age } = global.db.data.users[m.sender];
  if (age < 17) {
    m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`);
    throw false;
  }
  let json = await fetch(`https://nekobot.xyz/api/image?type=pussy`);
  let pussy = await json.json();
  await conn.sendNyanCat(
    m.chat,
    global.wait,
    adnyancat18,
    adnsfw,
    null,
    script,
    m
  );
  conn.sendFile(
    m.chat,
    pussy.message,
    "out.png",
    `_${command}_`.trim(),
    m,
    true,
    {
      contextInfo: {
        forwardingScore: 200,
        isForwarded: false,
        externalAdReply: {
          showAdAttribution: false,
          title: botname,
          body: `h`,
          mediaType: 2,
          sourceUrl: linkgc,
          thumbnail: miniurl,
        },
        mentions: [m.sender],
      },
    },
    { quoted: m }
  );
};

handler.help = ["pussy"];
handler.tags = ["nsfw"];
handler.command = ["pussy"];
handler.cookie = true;
handler.register = true;

export default handler;
