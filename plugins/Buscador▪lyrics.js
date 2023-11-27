import Buscar from "lyria-npm";
import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : "";
  if (!teks) throw `⚠️️ *Ingrese el nombre de la canción.*`;
  try {
    const letter = await Buscar(teks);
    console.log(letter);
    const result = `🍉 ↳ Titulo: ${letter.titulo}
💿 ↳ Album: ${letter.albulm}

${letter.letra}`;

    /*await conn.sendUrl(m.chat, result, m, {
        externalAdReply: {
           mediaType: 1,
           renderLargerThumbnail: true,
           thumbnail: ftextjpg,
           thumbnailUrl: ftextjpg,
           title: botname,
        }
     })*/
    m.reply(result);
  } catch {
    throw `*_⚠️ Error, no se encontró la letra de esta canción._*`;
  }
};

handler.help = ["Lyrics"].map((v) => v + "");
handler.tags = ["search"];
handler.command = ["letra", "lyrics", "letras"];
handler.register = true;

export default handler;
