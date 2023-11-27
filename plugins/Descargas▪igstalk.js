import fetch from "node-fetch";
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0])
    throw `⚠️ *Escriba un Nombre de Usuario.*\n\n📌 *_Ejemplo :_* ${
      usedPrefix + command
    } carlos_acosta.1`;
  let res = await fetch(
    `https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${lolkeysapi}`
  );
  let igs = await res.json();
  let img = await (await fetch(igs.result.photo_profile)).buffer();
  let te = `*Instagram Stalk 🌺*
  
 *⤿ 🥗 Nombre:* ${igs.result.fullname}
 *⤿ 🍘 Username:* ${igs.result.username}
 *⤿ 👥 Seguidores:* ${igs.result.followers}
 *⤿ 🐢 Siguiendo:* ${igs.result.following}
 *⤿ 💬 Bio:* ${igs.result.bio}
 *⤿ 🏝️ Posts:* ${igs.result.posts}`;

  conn.sendUrl(m.chat, te, m, {
    externalAdReply: {
      mediaType: 1,
      renderLargerThumbnail: true,
      thumbnail: img,
      thumbnailUrl: img,
      title: botname,
    },
  });
};
handler.help = ["igstalk *<nombre de usuario>*"];
handler.tags = ["downloader"];
handler.command = ["igstalk"];
handler.register = true;

export default handler;
