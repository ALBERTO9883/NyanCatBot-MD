import fetch from 'node-fetch'
import fg from 'api-dylux'

let handler  =  async  (m, { text,  usedPrefix,  command 
})  => {
    if  (!text) 
    throw ` *_🪻•Ingrese su petición._* \n *🪼Ejemplo de uso:* ${usedPrefix  +  command } como hacer un gatito con papel`
    m.ftext(wait)
    try  {
        let jsons = await fg.ChatGpt(`${text}`)
        m.ftext(jsons.text)    
    } 
    catch  {        
        throw `*_⚠️Error, inténtelo más tarde._*`
    }
}
handler.help = ['openai *<petición>*', 'ia *<petición>*']
handler.tags = ['tools']
handler.command  =   ['openai',  
'chatgpt',  
'ia',  
'robot', 'ai']
export default handler

handler.register = true
