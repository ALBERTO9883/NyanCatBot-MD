import ufs from "url-file-size";
import { sizeFormatter } from "human-readable";
import fetch from "node-fetch";
import { ytmp4 } from "@nechlophomeriaa/ytdl";

let format = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

let handler = async (m, { conn, args, isPrems, isOwner, text, usedPrefix }) => {
  if (!args || !args[0])
    throw `*_⚠️ Inserte el comando más el enlace de YouTube._*`;
  if (!args[0].match(/youtu/gi))
    throw `*_⚠️ Esto no es un enlace de YouTube._*\n*_📌 Ejemplo :_* *${
      usedPrefix + command
    }* https://youtu.be/H5v3kku4y6Q?si=baGFQa48xOeJTL3s`;
    try {
      var limit;
      if (isOwner || isPrems) limit = 900;
      else limit = 350;
      const ytm = await ytmp4(args[0]);
      const { title, channel, duration, type, quality, id, thumbnail, url } = ytm;
      let size = await format(await ufs(url));
      if (Number(size.split(" MB")[0]) >= limit)
        return m
          .reply(
            `⚠️ *_El archivo pesa mas de ${limit} MB, se canceló la Descarga._*`
          )
          .then((_) => m.react("✖️"));
      if (Number(size.split(" GB")[0]) >= 0)
        return m
          .reply(
            `⚠️ *_El archivo pesa mas de ${limit} MB, se canceló la Descarga._*`
          )
          .then((_) => m.react("✖️"));
      let img = await (await fetch(thumbnail)).buffer();
      let txt = `💿 *Y O U T U B E  -  M P 4*\n\n`;
      txt += ` ⤿   *Titulo* : ${title}\n`;
      txt += ` ⤿   *Canal* : ${channel}\n`;
      txt += ` ⤿   *Calidad* : ${quality}\n`;
      txt += ` ⤿   *Tamaño* : ${size}\n`;
      txt += ` ⤿   *Duración* : ${duration || "×"}\n`;
      txt += ` ⤿   *Tipo* : ${type}\n`;
      txt += ` ⤿   *Url* : ${"https://youtu.be/" + id}\n\n`;
      txt += `El video se esta enviando, Espere un momento.`;
      await conn.sendUrl(m.chat, txt, m, {
        externalAdReply: {
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnail: img,
          thumbnailUrl: img,
          title: botname,
        },
      });
conn.sendMessage(
      m.chat,
      {
        document: { url: url },
        mimetype: "video/mp4",
        fileName: title + ".mp4",
      },
      { quoted: m }
    );
    } catch {
      m.reply("*_🐢 Error, hubo un problema en la descarga._*");
    }
};
handler.help = ["ytvdoc *<link yt>*"];
handler.tags = ["downloader"];
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
