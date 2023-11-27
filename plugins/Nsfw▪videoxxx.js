import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, command }) => {
  let name = await conn.getName(m.sender);
  if (!global.db.data.chats[m.chat].nsfw && m.isGroup)
    throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`;
  var { age } = global.db.data.users[m.sender];
  if (age < 17) {
    m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`);
    throw false;
  }
  let res = await fetch(
    "https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51"
  );
  let json = await res.json();
  await conn.sendNyanCat(
    m.chat,
    global.wait,
    adnyancat18,
    adnsfw,
    null,
    script,
    m
  );
  conn.sendFile(
    m.chat,
    json.result,
    "out.png",
    `_${command}_`.trim(),
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
};
handler.help = ["videoxxx"];
handler.tags = ["nsfw"];
handler.command = /^videoxxx|vídeoxxx$/i;
handler.register = true;
handler.cookie = true;

export default handler;
