import fetch from 'node-fetch' 
 let handler = async (m, { text, usedPrefix, command }) => { 
 if (!text) throw `*_🪻 • Ingrese su petición._*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} como hacer un gatito con papel` 
 m.ftext(wait)
 try { 
 let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)   
 let IAR2 = await IA2.json() 
 m.ftext(`${IAR2.response}`.trim())     
 } catch { 
 try {    
 let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`) 
 let jjJson = await rrEes.json() 
 m.ftext(jjJson.data.data.trim())     
 } catch {       
 try {     
 let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`) 
 let hasill = await tioress.json() 
 m.ftext(`${hasill.result}`.trim())    
 } catch {         
 throw `*_⚠️ Error, inténtelo más tarde._*` 
 }}}} 
 handler.help = ['openai *<petición>*', 'ia *<petición>*']
 handler.tags = ['tools']
 handler.command = ['openai', 'chatgpt', 'ia', 'robot', 'ai'] 
 export default handler