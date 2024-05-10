import BotWhatsapp from '@bot-whatsapp/bot';
/*
import chatbotFlow from './chatbot.flow';
import nodeFlow from './node.flow';*/
// Importar el nuevo flujo
import helloFlow from './hello.flow';
import welcomeFlow from './welcome.flow';
//import chatFlow from './chat.flow';  // Flujo que interactúa con OpenAI
/**
 * Debes de implementasr todos los flujos
 */
export default BotWhatsapp.createFlow(
    [
       /* 
        
        chatbotFlow,
        nodeFlow,*/
        welcomeFlow,
        helloFlow,
        //chatFlow 
    ]
)