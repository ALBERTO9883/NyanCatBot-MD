import fs from "fs";
import ufs from "url-file-size";
import { sizeFormatter } from "human-readable";
import fetch from "node-fetch";
import { ytmp3 } from "@nechlophomeriaa/ytdl";
import axios from "axios";
import NodeID3 from "node-id3";

let format = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0])
    throw `*_⚠️ Inserte el comando más el enlace de YouTube._*`;
  if (!args[0].match(/youtu/gi))
    throw `*_⚠️ Esto no es un enlace de YouTube._*\n*_📌 Ejemplo :_* *${
      usedPrefix + command
    }* https://youtu.be/H5v3kku4y6Q?si=baGFQa48xOeJTL3s`;
  try {
    const limit = 60;
    const ytm = await ytmp3(args[0]);
    const { title, channel, duration, type, quality, id, thumbnail, url } = ytm;
    let size = await format(await ufs(url));
   const _0x1c0e52=_0x2675;(function(_0x1457f1,_0x40d728){const _0x278b59=_0x2675,_0x383a1e=_0x1457f1();while(!![]){try{const _0x1ed8f2=parseInt(_0x278b59(0x116))/0x1+parseInt(_0x278b59(0x10e))/0x2+parseInt(_0x278b59(0x114))/0x3*(parseInt(_0x278b59(0x10d))/0x4)+-parseInt(_0x278b59(0x113))/0x5*(parseInt(_0x278b59(0x119))/0x6)+parseInt(_0x278b59(0x110))/0x7+parseInt(_0x278b59(0x11e))/0x8+-parseInt(_0x278b59(0x10c))/0x9;if(_0x1ed8f2===_0x40d728)break;else _0x383a1e['push'](_0x383a1e['shift']());}catch(_0x1ed635){_0x383a1e['push'](_0x383a1e['shift']());}}}(_0x20f8,0xcf47f));function _0x2675(_0x2a1c8b,_0x40c693){const _0x20f8db=_0x20f8();return _0x2675=function(_0x26753f,_0x4717c3){_0x26753f=_0x26753f-0x10c;let _0x517154=_0x20f8db[_0x26753f];return _0x517154;},_0x2675(_0x2a1c8b,_0x40c693);}let buffer=await conn[_0x1c0e52(0x111)](url);function _0x20f8(){const _0x46f2df=['then','image/jpeg','arraybuffer','data','get','36965628LzJaSH','84EfEnXL','3131106kLYobT','binary','6128948BzKDoB','getFile','Downloaded\x20from\x20Alberto.\x0aAqui\x20agrega\x20la\x20letra\x20de\x20tu\x20cancion.','5jjAWNT','82533PsCDHB','.mp3','1349227tQPadb','Downloaded\x20from\x20NyanCatBot','floor','3458670sDlgsC','promises','./tmp/','random','front\x20cover','9317480dEsLuj','spa','from','writeFile'];_0x20f8=function(){return _0x46f2df;};return _0x20f8();}const getRandom=_0x58ce43=>{const _0x41c79a=_0x1c0e52;return''+Math[_0x41c79a(0x118)](Math[_0x41c79a(0x11c)]()*0x2710)+_0x58ce43;},randomName=getRandom(_0x1c0e52(0x115)),filePath=_0x1c0e52(0x11b)+randomName;await fs[_0x1c0e52(0x11a)][_0x1c0e52(0x121)](filePath,buffer[_0x1c0e52(0x125)]);const tags={'title':''+title||'-','artist':''+channel||'-','album':''+title||'-','comment':{'language':'spa','text':_0x1c0e52(0x117)},'unsynchronisedLyrics':{'language':_0x1c0e52(0x11f),'text':_0x1c0e52(0x112)},'image':{'mime':_0x1c0e52(0x123),'type':{'id':0x3,'name':_0x1c0e52(0x11d)},'description':'YouTube\x20Thumbnail','imageBuffer':await axios[_0x1c0e52(0x126)](''+thumbnail,{'responseType':_0x1c0e52(0x124)})[_0x1c0e52(0x122)](_0xb2f8e0=>Buffer[_0x1c0e52(0x120)](_0xb2f8e0[_0x1c0e52(0x125)],_0x1c0e52(0x10f)))},'copyright':'Copyright\x20NyanCatBot\x20©\x202023'};
    await NodeID3.write(tags, filePath);
    if (Number(size.split(" MB")[0]) >= limit)
      return m
        .reply(
          `⚠️ *_El archivo pesa mas de ${limit} MB, se canceló la Descarga._*`
        )
        .then((_) => m.react("✖️"));
    if (Number(size.split(" GB")[0]) >= 0)
      return m
        .reply(
          `⚠️ *_El archivo pesa mas de ${limit} MB, se canceló la Descarga._*`
        )
        .then((_) => m.react("✖️"));
    let img = await (await fetch(thumbnail)).buffer();
    let txt = `💿 *Y O U T U B E  -  M P 3*\n\n`;
    txt += ` ⤿   *Titulo* : ${title}\n`;
    txt += ` ⤿   *Canal* : ${channel}\n`;
    txt += ` ⤿   *Calidad* : ${quality}\n`;
    txt += ` ⤿   *Tamaño* : ${size}\n`;
    txt += ` ⤿   *Duración* : ${duration || "×"}\n`;
    txt += ` ⤿   *Tipo* : ${type}\n`;
    txt += ` ⤿   *Url* : ${"https://youtu.be/" + id}\n\n`;
    txt += `El audio se esta enviando, Espere un momento.`;
    await conn.sendUrl(m.chat, txt, m, {
      externalAdReply: {
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnail: img,
        thumbnailUrl: img,
        title: botname,
      },
    });
    conn.sendMessage(
      m.chat,
      {
        document: await fs.readFileSync(filePath),
        fileName: `${title}.mp3`,
        mimetype: "audio/mpeg",
      },
      { quoted: m }
    );
  } catch {
    m.reply("*_🐢 Error, hubo un problema en la descarga._*");
  }
};
handler.help = ["ytadoc *<link yt>*"];
handler.tags = ["downloader"];
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i;
export default handler;
