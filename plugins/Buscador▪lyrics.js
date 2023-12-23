import fetch from "node-fetch";
import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : "";
  if (!teks) throw `⚠️️ *Ingrese el nombre de la canción.*`;
  try {
    const res = await axios.get(`https://weeb-api.vercel.app/genius?query=${text}`);
    const { title, fullTitle, artist, url, image } = res.data[0]
    const lyric = await axios.get(`https://weeb-api.vercel.app/lyrics?url=${url}`);
    let img = await (await fetch(`${image}`)).buffer()
    const result = `↳  *Nombre:* ${title}\n↳  *Titulo:* ${fullTitle}\n↳  *Artista:* ${artist}\n↳  *Link:* ${url}\n\n${lyric.data}`

    await conn.sendUrl(m.chat, result, m, {
        externalAdReply: {
           mediaType: 1,
           renderLargerThumbnail: true,
           thumbnail: img,
           thumbnailUrl: img,
           title: botname,
        }
     })
   } catch {
      m.reply("*_🐢 Lo siento, no se ha encontrado el nombre de esta musica._*");
    }
};

handler.help = ["letra *<nombre>*"];
handler.tags = ["search"];
handler.command = ["letra", "lyrics", "letras"];
handler.register = true;

export default handler;
