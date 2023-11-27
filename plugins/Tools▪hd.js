import fs from "fs";
import fetch from "node-fetch";
import { srgan2x, srgan4x } from "super-resolution-scraper";
import FormData from "form-data";

let handler = async (m, { conn, usedPrefix, command, args }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime) throw "⚠️️ *_Responde a una imagen._*";
  if (!/image\/(jpe?g|png)/.test(mime)) throw `⚠️️ *Formato no soportado, asegurese que sea una imagen*`;
  let media = await q.download(true);
  let data = await uploadFile(media);
  let url = data.files[0].url;
  try {
    let image = await srgan4x(url);
    conn.sendFile(
      m.chat,
      image.result,
      "out.png",
      null,
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
  } catch {
    m.ftext("⚠️ *_Hubo un problema al cargar la imagen._*");
  }
};
handler.help = ["hd *<image>*"];
handler.tags = ["tools"];
handler.command = ["hd"];
handler.cookie = false;

export default handler;

async function uploadFile(path) {
  let form = new FormData();
  form.append("files[]", fs.createReadStream(path));
  let res = await (
    await fetch("https://uguu.se/upload.php", {
      method: "post",
      headers: {
        ...form.getHeaders(),
      },
      body: form,
    })
  ).json();
  await fs.promises.unlink(path);
  return res;
}
