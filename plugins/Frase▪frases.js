import fetch from "node-fetch";
import axios from "axios";
import { translate } from "@vitalets/google-translate-api";
let handler = async (m, { conn, command }) => {
  if (command == "consejo") {
    let res = await fetch("https://api.akuari.my.id/randomtext/bacot");
    let json = await res.json();
    let frase = await translate(`${json.hasil.result}`, {
      to: "es",
      autoCorrect: true,
    });

    m.reply(`*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${frase}*\n*┗━━━━━━━━━━━━━━━━┚*`);
  }

  if (command == "fraseromantica") {
    let res = await fetch("https://api.popcat.xyz/pickuplines");
    let json = await res.json();
    let { pickupline } = json;
    const tld = "cn";
    let frase = await translate(`${pickupline}`, {
      to: "es",
      autoCorrect: true,
    });
    let fraseromantica = `*❥  ${frase.text}*`;
    conn.sendNyanCat(
      m.chat,
      fraseromantica,
      await (
        await fetch("https://telegra.ph/file/62ef85167cc5015d4b40c.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }

  if (command == "frase") {
    let res = await fetch(
      "https://api.zahwazein.xyz/randomtext/randomquote?apikey=zenzkey_048b3b850d51"
    );
    let json = await res.json();
    let { message } = json.result;
    const tld = "cn";
    let frase = await translate(`${message}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      frase.text,
      await (
        await fetch("https://telegra.ph/file/f6a339acb8b55b33c99dc.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
  if (command == "dato") {
    let res = await fetch("https://api.popcat.xyz/fact");
    let json = await res.json();
    let { fact } = json;
    let frase = await translate(`${fact}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      frase.text,
      await (
        await fetch("https://telegra.ph/file/bc98459abf3e9b050cb1b.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
  if (command == "frasesabia") {
    let res = await fetch("https://api.akuari.my.id/randomtext/katabijak");
    let json = await res.json();
    let { quotes } = json.hasil;
    let frase = await translate(`${quotes}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      frase.text,
      await (
        await fetch("https://telegra.ph/file/31a2a876b8cd95cfd4580.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
  if (command == "pensamiento") {
    let res = await fetch("https://api.akuari.my.id/randomtext/katailham");
    let json = await res.json();
    let { result } = json.hasil;
    let frase = await translate(`${result}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      frase.text,
      await (
        await fetch("https://telegra.ph/file/20f8e173cde318c845d92.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
  if (command == "critico") {
    let res = await fetch("https://api.akuari.my.id/randomtext/sindiran");
    let json = await res.json();
    let { result } = json.hasil;
    let frase = await translate(`${result}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      frase.text,
      await (
        await fetch("https://telegra.ph/file/b1644222c0b6ea691cad7.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
  if (command == "chiste") {
    let res = await fetch("https://api.popcat.xyz/joke");
    let json = await res.json();
    let { joke } = json;
    let frase = await translate(`${joke}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      frase.text,
      await (
        await fetch("https://telegra.ph/file/0b419d5ac4c2c3ec92344.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
  if (command == "2opciones") {
    let res = await fetch("https://api.popcat.xyz/wyr");
    let json = await res.json();
    let { ops1, ops2 } = json;
    let frase = await translate(`${ops1}`, { to: "es", autoCorrect: true });
    let frase2 = await translate(`${ops2}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      `*Opción 1:* ${frase.text}\n\n*O*\n\n*Opción 2:* ${frase2.text}`,
      await (
        await fetch("https://telegra.ph/file/80cd78c02095417328c42.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
    if (command == "adivinanza") {
    let res = await fetch("https://riddles-api.vercel.app/random");
    let json = await res.json();
    let { riddle, answer } = json;
    let frase = await translate(`${riddle}`, { to: "es", autoCorrect: true });
    let frase2 = await translate(`${answer}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      `*${frase.text}*\n\n${frase2.text}`,
      await (
        await fetch("https://telegra.ph/file/d6f67ab577ebb73b9f989.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
      if (command == "famososfrase") {
    const options = {
  method: 'GET',
  url: 'https://famous-quotes4.p.rapidapi.com/random',
  params: {
    category: 'all',
    count: '2'
  },
  headers: {
    'X-RapidAPI-Key': '44cbeee30emsha89b91b41a56cfcp15fb63jsn7601bd3a62fa',
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
};
	const response = await axios.request(options);
    let frase = await translate(`${response.data[0].text}`, { to: "es", autoCorrect: true });
    let frase2 = await translate(`${response.data[0].category}`, { to: "es", autoCorrect: true });
    conn.sendNyanCat(
      m.chat,
      `🪴 Frase:  ${frase.text}\n*🌺 Autor:* ${response.data[0].author}\n*☕ Categoría:* ${frase2.text}`,
      await (
        await fetch("https://telegra.ph/file/1e8ceea60b76d1a77dcd0.jpg")
      ).buffer(),
      "Fʀᴀsᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ 🌺",
      "◍⃝߭۫ꯨ🐢۪〬.࠭⤿ Is Magic🐱",
      script,
      m
    );
  }
};
handler.tags = ["frases"];
handler.command = handler.help = [
  "consejo",
  "fraseromantica",
  "frase",
  "dato",
  "frasesabia",
  "pensamiento",
  "critico",
  "chiste",
  "2opciones",
  "adivinanza",
  "famososfrase",
];
handler.register = true;

export default handler;
