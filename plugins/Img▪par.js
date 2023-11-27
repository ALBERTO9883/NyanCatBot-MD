import fetch from "node-fetch";
let handler = async (m, { conn, command }) => {
  m.react("🕒");
  let res = await fetch(
    `https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`
  );
  if (res.status != 200) throw await res.text();
  let json = await res.json();
  if (!json.status) throw json;
  conn.sendFile(
    m.chat,
    json.result.male,
    "out.png",
    `*_Chico 🫐_*`,
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
  conn.sendFile(
    m.chat,
    json.result.female,
    "out.png",
    `*_Chica 🍇_*`,
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
  m.react("☑️");
};
handler.help = ["mitad"];
handler.tags = ["img"];
handler.command = /^(par|mitad)$/i;
handler.register = true;
handler.cookie = true;
export default handler;
