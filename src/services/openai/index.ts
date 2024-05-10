import OpenAI from "openai";  // Importar el cliente OpenAI
import { generateChatPrompt } from "./prompt";  // Importar el nuevo prompt
import { ChatCompletionMessageParam } from "openai/resources";  // Importar el tipo correcto para mensajes

// Crear una instancia de OpenAI con la clave de API y configuración
const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,  // Usa la clave de API correcta
    baseURL: "https://api.groq.com/openai/v1",  // Base URL para OpenAI
});

/**
 * @Param name
 * @Param question
*/

// Nueva función para interactuar con OpenAI usando el nuevo prompt
const runChat = async (name:string, history: ChatCompletionMessageParam[]): Promise<string> => {
    const promtp = generateChatPrompt(name);  // Generar el prompt con la pregunta
    console.log('[PROMPT_CHAT]:',promtp)
    const response = await openai.chat.completions.create({
        model: "llama3-70b-8192",  // Modelo utilizado para interactuar con OpenAI
        messages: [
            { role: "system",
             content: promtp },
             ...history
        ],  // Utiliza el prompt generado
        
        temperature: 1,
        max_tokens: 800,  // Puedes ajustar según sea necesario
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.choices[0].message.content;  // Devolver la respuesta obtenida de OpenAI
};

// Exportar la función para uso en otros módulos
export { runChat };  // Exportar solo la función que utiliza el nuevo prompt

