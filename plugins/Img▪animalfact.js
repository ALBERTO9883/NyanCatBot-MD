import fetch from 'node-fetch';
import db from '../lib/database.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `
*[❗] Uso correcto:*    
*► ${usedPrefix}${command} opción*

*Ejemplo de uso:*
*► ${usedPrefix}${command} dog*\n
\t\t\t *「🪴 OPCIONES 🪴」*
*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*
 • _dog_
 • _cat_
 • _panda_
 • _fox_
 • _red_panda_
 • _koala_
 • _birb_
 • _raccoon_
 • _kangaroo_
`.trim();
  await conn.sendNyanCat(m.chat, global.wait, adnyancat, adimagen, null, script, m)
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.image) await conn.sendFile(m.chat, json.image, "", `${json.fact}\n\n*NyanCatBot - MD*`, m);
  else throw json;
};
handler.help = ["animal"]
handler.tags = ["img"];
handler.command = /^(animal|animalfact)$/i;
handler.register = true

export default handler;
