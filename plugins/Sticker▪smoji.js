import { sticker } from "../lib/sticker.js";
import emoji from "../lib/semoji.js";

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  let er = `
 ⚠️ *_Uso del comando._*
*${usedPrefix + command}* <tipo> <emoji>

📌 *_Ejemplo :_*
*${usedPrefix + command}* fa 😎

┏━⊜🍂 *TIPOS* 
┃⋄ wha = whatsapp 
┃⋄ ap = apple
┃⋄ fa = facebook
┃⋄ ig = Instagram
┃⋄ go = google
┃⋄ ht = htc
┃⋄ mi = microsoft
┃⋄ mo = mozilla
┃⋄ op = openmoji
┃⋄ pi = pixel
┃⋄ sa = samsung
┃⋄ tw = twitter
┃⋄ edx = emojidex
┃⋄ sb = softbank
┃⋄ ak = au_kddi
┗━━━━━━━━━━━━⬣

Solo puede usar 1 emoji, preste atención a los espacios`;
  if (!args[0]) throw er;

  let template = (args[0] || "").toLowerCase();
  if (!args[1]) throw er;
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case "apple":
        case "ip":
        case "ap":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.apple,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "facebook":
        case "fb":
        case "fa":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.facebook,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "google":
        case "go":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.google,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "htc":
        case "ht":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.htc,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "lg":
        case "ig":
        case "instagram":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.lg,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "microsoft":
        case "mc":
        case "mi":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.microsoft,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "mozilla":
        case "moz":
        case "mo":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.mozilla,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "openmoji":
        case "omoji":
        case "op":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.openmoji,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "pixel":
        case "pi":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.joypixels,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "samsung":
        case "sa":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.samsung,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "twitter":
        case "tw":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              false,
              emoji.emojisData.twitter,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "whatsapp":
        case "wa":
        case "wh":
        case "wha":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              null,
              emoji.emojisData.whatsapp,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "emojidex":
        case "ed":
        case "edx":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              null,
              emoji.emojisData.emojidex,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "softbank":
        case "sb":
        case "sbk":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              null,
              emoji.emojisData.softbank,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
        case "au_kddi":
        case "ak":
          emoji(`${args[1]}`).then(async (emoji) => {
            let stiker = await sticker(
              null,
              emoji.emojisData.au_kddi,
              global.packname,
              global.author
            );
            await conn.sendNyanCat(
              m.chat,
              global.wait,
              adnyancat,
              adsticker,
              null,
              script,
              m
            );
            conn.sendFile(
              m.chat,
              stiker,
              null,
              { asSticker: true },
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
                },
              },
              { quoted: m }
            );
          });
          break;
      }
    } catch (e) {
      throw er;
    }
  }
};
handler.help = ["semoji *<tipo> <emoji>*"];
handler.tags = ["sticker"];
handler.command = ["emoji", "smoji", "semoji"];

export default handler;
