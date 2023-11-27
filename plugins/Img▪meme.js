import hispamemes from "hispamemes";

let handler = async (m, { conn, usedPrefix, command }) => {
  const meme = hispamemes.meme();
  conn.sendFile(m.chat, meme, "", "", m);
};
handler.help = ["meme"];
handler.tags = ["img"];
handler.command = ["meme", "memes"];
handler.cookie = true;

export default handler;
