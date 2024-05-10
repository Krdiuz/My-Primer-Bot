import "dotenv/config"
import BotWhatsapp from '@bot-whatsapp/bot';
import { ChatCompletionMessageParam } from 'openai/resources';
import { runChat } from 'src/services/openai';
/*
import { run, runDetermine } from 'src/services/openai';
import chatbotFlow from './chatbot.flow';*/

/**
 * Un flujo conversacion que es por defecto cunado no se contgiene palabras claves en otros flujos
 */
export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic, state}) => {
       const newHistory = (state.getMyState()?.history ?? []) as ChatCompletionMessageParam[]
       const name = ctx?.pushName ?? ''

       try{
              console.log(`[HISTORY]:`, newHistory)


              newHistory.push({
                     role: 'user',
                     content: ctx.body
              })
       
              const ai = await runChat(name,newHistory)
       
              //console.log(`[MENSAJE ENTRANTE]:`,ctx.body)
       
       
              await flowDynamic(ai)

              newHistory.push({
                     role: 'assistant',
                     content: ai


              })

              await state.update({history: newHistory})

       }catch(err){
              console.log(`[ERROR]:`,err)
       }

      
})
