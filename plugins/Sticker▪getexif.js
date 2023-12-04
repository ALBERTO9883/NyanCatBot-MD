import { format } from "util";
const {
  default: { Image },
} = await import("node-webpmux");

let handler = async (m) => {
  if (!m.quoted) return m.reply("⚠️️ *_Responde a un sticker._*");
  try {
    if (/sticker/.test(m.quoted.mtype)) {
      let img = new Image();
      m.reply(`${global.wait}`);
      await img.load(await m.quoted.download());
      m.reply(format(JSON.parse(img.exif.slice(22).toString())));
    }
  } catch {
    m.reply(
      "*_🐢 Lo siento, al parecer este sticker no cuenta con metadatos._*"
    );
  }
};
handler.help = ["getexif"];
handler.tags = ["sticker"];

handler.command = ["getexif"];

export default handler;
