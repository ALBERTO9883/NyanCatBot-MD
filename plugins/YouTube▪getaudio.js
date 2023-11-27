import { youtubedl, youtubedlv2, youtubeSearch } from "@bochilteam/scraper";
import yts from "yt-search";
import fetch from "node-fetch";

let handler = async (
  m,
  { conn, args, isPrems, isOwner, text, usedPrefix, command }
) => {
  if (!args || !args[0])
    throw `*_⚠️ Inserte el comando más el enlace de YouTube._*`;
  if (!args[0].match(/youtu/gi))
    throw `*_⚠️ Esto no es un enlace de YouTube._*\n*_📌 Ejemplo :_* *${
      usedPrefix + command
    }* https://youtu.be/H5v3kku4y6Q?si=baGFQa48xOeJTL3s`;
  try {
    let q = "128kbps";
    let v = args[0];

    const yt = await youtubedl(v).catch(async () => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const title = await yt.title;
    const thumbnail = await yt.thumbnail
    const size = await yt.audio[q].fileSizeH;

    let vid = (await yts(text)).all[0];
    let { videoId, timestamp, views, ago, url } =
      vid;

    await m.reply(`❏ 📓 *Tɪ́ᴛᴜʟᴏ:* ${title}
❏ 📁 Tᴀᴍᴀɴ̃ᴏ: ${size}

${global.wait}`);
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: dl_url },
        mimetype: "audio/mp4",
        fileName: title + ".mp3",
        quoted: m,
        contextInfo: {
          forwardingScore: 200,
          isForwarded: false,
          externalAdReply: {
            showAdAttribution: false,
            title: `${title}`,
            body: `${vid.author.name}`,
            mediaType: 2,
            sourceUrl: `${url}`,
            thumbnail: await (await fetch(thumbnail)).buffer(),
          },
        },
      },
      { quoted: m }
    );
  } catch (e) {
    m.reply("⚠️ *_Error, no se pudo descargar el audio..._*");
    console.log(e);
  }
};
handler.tags = ["downloader"];
handler.help = ["getaud *<url yt>*"];
handler.command = /^(getaud)$/i;
handler.register = true;
export default handler;
