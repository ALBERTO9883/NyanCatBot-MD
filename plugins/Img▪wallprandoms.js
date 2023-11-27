import fetch from "node-fetch";
import axios from "axios";
import db from "../lib/database.js";
import { translate } from "@vitalets/google-translate-api";
let handler = async (m, { command, conn }) => {
  let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)];
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let user = global.db.data.users[who];
  let name = await conn.getName[who];
  if (command == "wpmontaña") {
    const res = await fetch(`https://pixabay.com/api/?key=40720387-033e8f29c15bac06d17f7a724&q=mountain&image_type=photo&page=${getRandomInt(1, 10)}`)
    const json = await res.json()
    const img = json.hits[Math.floor(Math.random() * json.hits.length)]
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      img.largeImageURL,
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
  if (command == "pubg") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/pubg?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "wpgaming") {
    const res = await fetch(`https://pixabay.com/api/?key=40720387-033e8f29c15bac06d17f7a724&q=video+games&image_type=photo&page=${getRandomInt(1, 10)}`)
    const json = await res.json()
    const img = json.hits[Math.floor(Math.random() * json.hits.length)]
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      img.largeImageURL,
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
  if (command == "wpaesthetic") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/wallhp?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "cat") {
    let json = await fetch(`https://api.thecatapi.com/v1/images/search`);
    let jsons = await json.json();
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      `${jsons[0].url}`,
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
  if (command == "coffee") {
    let haha = await conn.getFile(`https://coffee.alexflipnote.dev/random`);
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "technology") {
    const res = await fetch(`https://pixabay.com/api/?key=40720387-033e8f29c15bac06d17f7a724&q=technology&image_type=photo&page=${getRandomInt(1, 5)}`)
    const json = await res.json()
    const img = json.hits[Math.floor(Math.random() * json.hits.length)]
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      img.largeImageURL,
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
  if (command == "hacker") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/hacker?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "wpcat") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/kucing?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "planeta") {
    const res = await fetch(`https://pixabay.com/api/?key=40720387-033e8f29c15bac06d17f7a724&q=planet&image_type=photo&page=${getRandomInt(1, 10)}`)
    const json = await res.json()
    const img = json.hits[Math.floor(Math.random() * json.hits.length)]
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      img.largeImageURL,
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
  if (command == "dog") {
    let haha = await fetch(
      `https://dog.ceo/api/breeds/image/random`
    );
    let hasil = await haha.json()
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      hasil.message,
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
  if (command == "randomprofile") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/profil?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "wpvehiculo") {
    let haha = await fetch(`https://api.popcat.xyz/car`);
    let json = await haha.json();
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      json.image,
      "out.png",
      `${json.title}`,
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
  if (command == "wpmoto") {
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
        m.chat,
        `https://api.zahwazein.xyz/randomimage/motor?apikey=${zenzapikey}`,
        "out.png",
        `${command}`,
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
  if (command == "cosplayer") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/cosplay?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "minecraft") {
    let json = await fetch(
      `https://api.zahwazein.xyz/randomimage/minecraft?apikey=${zenzapikey}`
    );
    let jsons = await json.json();
    let { caption, image } = jsons.result;
    let result = await translate(caption, { to: "es", autoCorrect: true });
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      image,
      "out.png",
      result.text,
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
  if (command == "patricio") {
    let haha = await conn.getFile(
      `https://api.zahwazein.xyz/randomimage/patrick?apikey=${zenzapikey}`
    );
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      haha.data,
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
  if (command == "space") {
    const res = await fetch(`https://pixabay.com/api/?key=40720387-033e8f29c15bac06d17f7a724&q=space&image_type=photo&page=${getRandomInt(1, 5)}`)
    const json = await res.json()
    const img = json.hits[Math.floor(Math.random() * json.hits.length)]
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      img.largeImageURL,
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
//For Ashly🌻
//Porque se, cuanto te gusta ver la luna
  if (command == "wpluna") {
    const res = await fetch(`https://pixabay.com/api/?key=40720387-033e8f29c15bac06d17f7a724&q=moon&image_type=photo&page=${getRandomInt(1, 10)}`)
    const json = await res.json()
    const img = json.hits[Math.floor(Math.random() * json.hits.length)]
    await conn.sendNyanCat(
      m.chat,
      global.wait,
      adnyancat,
      adimagen,
      null,
      script,
      m
    );
    conn.sendFile(
      m.chat,
      img.largeImageURL,
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
handler.command = handler.help = [
  "wpmontaña",
  "pubg",
  "wpgaming",
  "wpaesthetic",
  "cat",
  "coffee",
  "technology",
  "hacker",
  "wpcat",
  "planeta",
  "dog",
  "randomprofile",
  "wpvehiculo",
  "wpmoto",
  "cosplayer",
  "minecraft",
  "patricio",
  "space",
  "wpluna"
];
handler.tags = ["img"];
handler.cookie = false;
handler.register = true;
export default handler;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }