import fetch from "node-fetch";
let handler = async (m, { conn, args, usedPrefix, command }) => {
  const info = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=el-mundo&apiKey=84baef01e6c640799202a741a11fdedf"
  );
  let img = await (
    await fetch("https://telegra.ph/file/17d0f2946ff10fd130507.jpg")
  ).buffer();
  let jsons = await info.json();
  let txt = `\t\t\t\t\t\t\t\t\t*• 🥗 Google News •*\n\n`;
  for (let x of jsons.articles) {
    txt += `*⤿ Titulo:* _${x.title}_
*⤿ Descripción:* _${x.description}_
*⤿ Publicado:* _${x.publishedAt}_
*⤿ Url:* _${x.url}_\n\n───\n\n`;
  }
  await conn.sendNyanCat(
    m.chat,
    txt,
    img,
    "• 🥗 Google News •",
    `${fecha}`,
    script,
    m
  );
};

handler.tags = ["info"];
handler.command = handler.help = ["googlenews", "noticias"];
handler.register = true;

export default handler;
