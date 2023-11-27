import fetch from "node-fetch";
import pHeaven from "p-heaven";
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!global.db.data.chats[m.chat].nsfw && m.isGroup)
    throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`;
  var { age } = global.db.data.users[m.sender];
  if (age < 17) {
    m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`);
    throw false;
  }
  if (!args[0])
    throw `⚠️ *_Ingrese un enlace valido de XNXX_*\n📌 *Ejemplo:* ${
      usedPrefix + command
    } https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
  if (!args[0].match(/xnxx/gi)) throw `❎ Link incorrecto`;
  try {
    await conn.reply(
      m.chat,
      "⚠️ *_Su video se esta procesando,espere un momento._*\n\n*El tiempo de envío depende el peso o duracion del video*",
      m
    );
    let res = pHeaven.dl(args[0]);
    conn.sendMessage(
      m.chat,
      {
        document: { url: res.normal },
        mimetype: "video/mp4",
        fileName: `${args[0]}`,
      },
      { quoted: m }
    );
  } catch {
    m.reply(
      "*_🐢 Lo siento, hubo un problema al intentar descargar el archivo._*"
    );
  }
};
handler.tags = ["nsfw"];
handler.help = ["xnxxdl *<enlace>*"];
handler.command = ["xnxxdl", "dlxnxx"];
handler.register = true;
handler.cookie = 2;
export default handler;
