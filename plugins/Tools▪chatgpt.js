import { generate } from "@nechlophomeriaa/chatgptv2";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `*_🪻•Ingrese su petición._* \n *🪼Ejemplo de uso:* ${
      usedPrefix + command
    } como hacer un gatito con papel`;
  try {
    let ai = await generate(text);
    m.ftext(ai.reply);
  } catch {
    throw `*_⚠️ Error, inténtelo más tarde._*`;
  }
};

handler.help = ["openai *<petición>*", "ia *<petición>*"];
handler.tags = ["tools"];
handler.command = ["openai", "chatgpt", "ia", "robot", "ai"];
export default handler;