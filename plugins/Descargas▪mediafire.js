import fetch from "node-fetch";
import { mediafiredl } from "@bochilteam/scraper";

let handler = async (
  m,
  { conn, args, usedPrefix, command, isOwner, isPrems }
) => {
  var limit;
  if (isOwner || isPrems) limit = 500;
  else limit = 400;
  if (!args[0]) throw `⚠️️ *_Ingrese el link de mediafire junto al comando_*`;
  if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrecto`;
  let full = /f$/i.test(command);
  let u = /https?:\/\//.test(args[0]) ? args[0] : "https://" + args[0];
  let ss = await (
    await fetch(global.API("nrtm", "/api/ssweb", { delay: 1000, url: u }))
  ).buffer();
  let res = await mediafiredl(args[0]);
  let { url, url2, filename, ext, aploud, filesize, filesizeH } = res;
  let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize;
  let caption = `
   ≡ *MEDIAFIRE*

❏ 📓 *Nombre:* ${filename}
❏ 📁 *Tamaño:* ${filesizeH}
❏ 📄 *Extension:* ${ext}
❏ 📤 *Subido:* ${aploud}
 ${
   isLimit
     ? `\n• El archivo supera el límite de descarga *+${limit} MB*\nPásate a premium para poder descargar archivos más de *900 MB*`
     : ""
 }  
 `.trim();
  m.reply(caption);
  if (!isLimit)
    await conn.sendFile(m.chat, url, filename, "", m, null, {
      mimetype: ext,
      asDocument: true,
    });
};
handler.help = ["mediafire *<url>*"];
handler.tags = ["downloader"];
handler.command = ["mediafire", "mfire"];
handler.limit = true;
handler.premium = false;

export default handler;
