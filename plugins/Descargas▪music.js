import fetch from 'node-fetch';
import lyrics from '@fantox01/lyrics-scraper';
import Spotify from 'spotifydl-x';
import fs from 'fs';
import SpottyDL from 'spottydl';
import NodeID3 from 'node-id3';
import axios from 'axios';

const handler = async (m, {conn, text}) => {
  if (!text) throw `⚠️ *_Ingrese el nombre de la música que desea descargar._*`;
  try {
    const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
    const jsonDL = await resDL.json();
    const data = await SpottyDL.getTrack(`${jsonDL.result[0].link}`)
    const linkDL = jsonDL.result[0].link;
    const spty = await spotifydl(linkDL);
    const result = await lyrics(`${data.title}`);
    var _0x1ac0=["","\x6C\x79\x72\x69\x63\x73","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x64\x20\x66\x72\x6F\x6D\x20\x41\x6C\x62\x65\x72\x74\x6F\x2E\x0A\x41\x71\x75\x69\x20\x61\x67\x72\x65\x67\x61\x20\x6C\x61\x20\x6C\x65\x74\x72\x61\x20\x64\x65\x20\x74\x75\x20\x63\x61\x6E\x63\x69\x6F\x6E\x2E"];const letra=`${_0x1ac0[0]}${result[_0x1ac0[1]]!== undefined?result[_0x1ac0[1]]:_0x1ac0[2]}${_0x1ac0[0]}`|| _0x1ac0[2] 
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    const randomName = getRandom('.mp3');
    const filePath = `./tmp/${randomName}`;
    fs.writeFileSync(filePath, spty.audio);
    var _0x1b11=["","\x74\x69\x74\x6C\x65","\x2D","\x61\x72\x74\x69\x73\x74","\x61\x6C\x62\x75\x6D","\x79\x65\x61\x72","\x74\x72\x61\x63\x6B\x4E\x75\x6D\x62\x65\x72","\x4D\x75\x73\x69\x63","\x73\x70\x61","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x64\x20\x66\x72\x6F\x6D\x20\x4E\x79\x61\x6E\x43\x61\x74\x42\x6F\x74","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x64\x20\x66\x72\x6F\x6D\x20\x41\x6C\x62\x65\x72\x74\x6F\x2E\x0A\x41\x71\x75\x69\x20\x61\x67\x72\x65\x67\x61\x20\x6C\x61\x20\x6C\x65\x74\x72\x61\x20\x64\x65\x20\x74\x75\x20\x63\x61\x6E\x63\x69\x6F\x6E\x2E","\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67","\x66\x72\x6F\x6E\x74\x20\x63\x6F\x76\x65\x72","\x59\x6F\x75\x54\x75\x62\x65\x20\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x64\x61\x74\x61","\x62\x69\x6E\x61\x72\x79","\x66\x72\x6F\x6D","\x74\x68\x65\x6E","\x63\x6F\x76\x65\x72\x5F\x75\x72\x6C","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x20\x4E\x79\x61\x6E\x43\x61\x74\x42\x6F\x74\x20\xA9\x20\x32\x30\x32\x33"];const tags={title:`${_0x1b11[0]}${data[_0x1b11[1]]}${_0x1b11[0]}`|| _0x1b11[2],artist:`${_0x1b11[0]}${data[_0x1b11[3]]}${_0x1b11[0]}`|| _0x1b11[2],album:`${_0x1b11[0]}${data[_0x1b11[4]]}${_0x1b11[0]}`|| _0x1b11[2],year:`${_0x1b11[0]}${data[_0x1b11[5]]}${_0x1b11[0]}`|| _0x1b11[2],trackNumber:`${_0x1b11[0]}${data[_0x1b11[6]]}${_0x1b11[0]}`|| _0x1b11[2],genre:_0x1b11[7]|| _0x1b11[2],comment:{language:_0x1b11[8],text:_0x1b11[9]},unsynchronisedLyrics:{language:_0x1b11[8],text:letra|| _0x1b11[10]},image:{mime:_0x1b11[11],type:{id:3,name:_0x1b11[12]},description:_0x1b11[13],imageBuffer: await axios[_0x1b11[20]](`${_0x1b11[0]}${spty[_0x1b11[14]][_0x1b11[18]]}${_0x1b11[0]}`,{responseType:_0x1b11[19]})[_0x1b11[17]]((response)=>{return Buffer[_0x1b11[16]](response[_0x1b11[14]],_0x1b11[15])})},copyright:_0x1b11[21]}
  await NodeID3.write(tags, filePath);
       let img = await (await fetch(`${spty.data.cover_url}`)).buffer()
       
    let txt = `*• 💽 Spotify Download •*\n\n`
         txt += `	◦  *Título* : ${data.title}\n`
         txt += `	◦  *Artista* : ${data.artist}\n`
         txt += `	◦  *N. Track* : ${data.trackNumber}\n`
         txt += `	◦  *Album* : ${data.album}\n`                 
         txt += `	◦  *Publicado* : ${data.year}\n\n`
         txt += `El audio se esta enviando, Espere un momento.`
      await conn.sendUrl(m.chat, txt, m, {
         externalAdReply: {
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: img,
            thumbnailUrl: img,
            title: botname,
         }
      });
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
    } catch {
    throw `⚠️ _Error, no se encontro una música que coincida con:_ *${text}*\n_Asegúrese que escribio correctamente el nombre de su canción_`;
    };
};
handler.command = /^(spotify|music)$/i;
handler.help = ['music *nombre*']
handler.tags = ['downloader']
export default handler;
handler.register = true
handler.limit = true

const credentials = {clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'};
const spotify = new Spotify.default(credentials);
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    const res = await spotify.getTrack(url).catch(() => {
      return { error: 'Fallo la descarga' };
    });
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Tiempo de espera agotado'));
      }, 300000); 
    });
    try {
      const audioPromise = spotify.downloadTrack(url);
      const audio = await Promise.race([audioPromise, timeoutPromise]);
      resolve({ data: res, audio });
    } catch (error) {
      reject(error);
    }
  });
}