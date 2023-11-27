import fetch from "node-fetch";
let handler = async (m, { conn, text }) => {
  if (!text)
    return conn.reply(
      m.chat,
      "⚠️ *_Inserte el comando más el nombre de usuario de TikTok._*",
      m
    );
  await conn.reply(m.chat, global.wait, m);
  try {
    let res = await fetch(
      `https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`
    );
    let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    let json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    let img = await (await fetch(json.result.user_picture)).buffer();
    let ignyc = `*TikTok Stalking 🌺*\n
 *⤿ 🍘 Username:* ${json.result.username}
 *⤿ 🥗 Nombre:* ${json.result.nickname}
 *⤿ 👥 Seguidores:* ${json.result.followers}
 *⤿ 🐢 Siguiendo:* ${json.result.followings}
 *⤿ 🪴 Likes:* ${json.result.likes}
 *⤿ 🏝️ Videos:* ${json.result.video}
 *⤿ 💬 Bio:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, "error.jpg", ignyc, m, false);
  } catch (e) {
    throw "❎ *_Error, No se encontro el nombre de usuario ingresado_*";
  }
};
handler.help = ["tiktokstalk *<usuario>*"];
handler.tags = ["downloader"];
handler.command = /^(tiktokstalk|ttstalk)$/i;
handler.register = true;
export default handler;
