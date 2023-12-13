import axios from "axios";
import instagramDl from "@sasmeee/igdl"

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
  let res = await instagramDl(args[0]);
  for (let result of res) {
    conn.sendFile(m.chat, result.download_link, "igdl.mp4", ``, m);
  }
};
handler.help = ["instagram *<link ig>*"];
handler.tags = ["downloader"];
handler.command = ["ig", "igdl", "instagram", "igimg", "igvid"];

export default handler;
