/* Thanks to https://github.com/BrunoSobrino
*/

import axios from "axios";
import fetch from "node-fetch";
let handler = async (m, { command, conn, usedPrefix }) => {
  if (!global.db.data.chats[m.chat].nsfw && m.isGroup)
    throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`;
  let name = await conn.getName(m.sender);
  var { age } = global.db.data.users[m.sender];
  if (age < 17) {
    m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`);
    throw false;
  }

  if (command == "nsfwloli") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfwfoot") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfwass") {
    let json = await fetch(
      `https://nekobot.xyz/api/image?type=hass`
    );
    let ass = await json.json();
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
      ass.message,
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
  }
  if (command == "nsfwbdsm") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfwcum") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwcum.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfwero") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfwfemdom") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfwglass") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "hentai") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "nsfworgy") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json`
      )
    ).data;
    let haha = await res[Math.floor(res.length * Math.random())];
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
      haha,
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
  }
  if (command == "tetas") {
    let json = await fetch(
      `https://nekobot.xyz/api/image?type=boobs`
    );
    let tetas = await json.json();
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
      tetas.message,
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
  }
  if (command == "booty") {
    let res = await fetch(`https://nekobot.xyz/api/image?type=ass`)
    let ass = await res.json()
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
      ass.message,
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
  }
  if (command == "ecchi") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`
      )
    ).data;
    let url = await res[Math.floor(res.length * Math.random())];
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
      url,
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
  }
  if (command == "furro") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`
      )
    ).data;
    let url = await res[Math.floor(res.length * Math.random())];
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
      url,
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
  }
  if (command == "trapito") {
    let res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    let json = await res.json();
    let url = json.url;
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
      url,
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
  }
  if (command == "lesbians") {
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
      'https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=KgrTRknD',
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
  }
  if (command == "panties") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`
      )
    ).data;
    let url = await res[Math.floor(res.length * Math.random())];
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
      url,
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
  }
  if (command == "pene") {
    let resError = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`
      )
    ).data;
    let res = await conn.getFile(
      `https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`
    ).data;
    if (res == "" || !res || res == null)
      res = await resError[Math.floor(resError.length * Math.random())];
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
      res,
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
  }
  if (command == "porno") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`
      )
    ).data;
    let url = await res[Math.floor(res.length * Math.random())];
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
      url,
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
  }
  if (command == "randomxxx") {
    let rawjsonn = [
      "https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json",
      "https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json",
      "https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json",
      "https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json",
      "https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json",
    ];
    let rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    let res = (await axios.get(rawjson)).data;
    let url = await res[Math.floor(res.length * Math.random())];
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
      url,
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
  }
  if (command == "yaoi") {
    let res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`);
    let json = await res.json();
    let url = json.message;
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
      url,
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
  }
  if (command == "yaoi2") {
    let res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`);
    let json = await res.json();
    let url = json.link;
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
      url,
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
  }
  if (command == "yuri") {
    let res = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`
      )
    ).data;
    let url = await res[Math.floor(res.length * Math.random())];
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
      url,
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
  }
  if (command == "yuri2") {
    let resError = (
      await axios.get(
        `https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`
      )
    ).data;
    let res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    let json = await res.json();
    let url = json.link;
    if (url == "" || !url || url == null)
      url = await resError[Math.floor(resError.length * Math.random())];
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
      url,
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
  }
};
handler.help = [
  "nsfwloli",
  "nsfwfoot",
  "nsfwass",
  "nsfwbdsm",
  "nsfwcum",
  "nsfwero",
  "nsfwfemdom",
  "nsfwfoot",
  "nsfwglss",
  "nsfworgy",
  "yuri",
  "yuri2",
  "yaoi",
  "yaoi2",
  "panties",
  "tetas",
  "booty",
  "ecchi",
  "furro",
  "hentai",
  "trapito",
  "lesbians",
  "pene",
  "porno",
  "randomxxx",
  "pechos",
];
handler.tags = ["nsfw"];
handler.command = [
  "nsfwloli",
  "nsfwfoot",
  "nsfwass",
  "nsfwbdsm",
  "nsfwcum",
  "nsfwero",
  "nsfwfemdom",
  "nsfwfoot",
  "nsfwglass",
  "nsfworgy",
  "yuri",
  "yuri2",
  "yaoi",
  "yaoi2",
  "panties",
  "tetas",
  "booty",
  "ecchi",
  "furro",
  "hentai",
  "trapito",
  "lesbians",
  "pene",
  "porno",
  "randomxxx",
];
handler.tags = ["nsfw"];
export default handler;