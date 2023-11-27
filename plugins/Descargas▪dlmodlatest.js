import fetch from "node-fetch";
import ufs from "url-file-size";
import { sizeFormatter } from "human-readable";

let format = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `⚠️️ *_Ingrese el link de modlatest junto al comando_*`;
  if (!args[0].match(/latestmodapks/gi)) throw `❎ Link incorrecto`;
  let limit = 300;
  let res = await fetch(
    `https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`
  );
  let json = await res.json();
  let size = await format(await ufs(json.respon.linkdl));
  if (Number(size.split(" MB")[0]) >= limit)
    return m
      .reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`)
      .then((_) => m.react("✖️"));
  if (Number(size.split(" GB")[0]) >= 0)
    return m
      .reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`)
      .then((_) => m.react("✖️"));
  await conn.sendNyanCat(
    m.chat,
    `*📁 • Peso:* ${json.respon.size}\n${global.wait}`,
    adnyancat,
    botname,
    me,
    script,
    m
  );
  let { linkdl } = json.respon;

  conn.sendMessage(
    m.chat,
    {
      document: { url: linkdl },
      mimetype: "application/videos.android.package-archive",
      fileName: `Apk modlatest.apk`,
    },
    { quoted: m }
  );
};
handler.help = ["dlmodlatest *<url>*"];
handler.tags = ["downloader"];
handler.command = ["dllatest", "dlmodlatest"];
handler.register = true;

handler.cookie = true;

export default handler;
