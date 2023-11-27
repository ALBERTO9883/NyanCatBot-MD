import fetch from "node-fetch";
import axios from "axios";
import cheerio from "cheerio";
import fg from "api-dylux";
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0])
    throw `*_📌️ Uso del comando_*\n *${
      usedPrefix + command
    }* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`;
  if (!args[0].match(/instagram/gi))
    throw `❎ Asegurese que el enlace sea de Instagram`;
  await conn.sendNyanCat(
    m.chat,
    global.wait,
    adnyancat,
    addescargas,
    null,
    script,
    m
  );
  let res = await igdl(args[0]);
  for (let result of res.data) {
    conn.sendFile(m.chat, result.url, "igdl.mp4", ``, m);
  }
};
handler.help = ["instagram *<link ig>*"];
handler.tags = ["downloader"];
handler.command = ["ig", "igdl", "instagram", "igimg", "igvid"];

export default handler;

async function igdl(url) {
  try {
    const response = await axios.post(
      "https://saveig.app/api/ajaxSearch",
      new URLSearchParams({ q: url, t: "media", lang: "en" }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Accept-Encoding": "gzip, deflate, br",
          Origin: "https://saveig.app/en",
          Referer: "https://saveig.app/en",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "User-Agent": "PostmanRuntime/7.31.1",
        },
      }
    );

    const $ = cheerio.load(response.data.data);
    const data = $("div.download-items__btn")
      .map((i, e) => {
        const type = $(e).find("a").attr("href").match(".jpg")
          ? "image"
          : "video";
        const url = $(e).find("a").attr("href");
        return {
          type,
          url,
        };
      })
      .get();

    return {
      status: data.length > 0,
      data,
    };
  } catch (error) {
    return {
      status: false,
      msg: error.message,
    };
  }
}
