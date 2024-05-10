/*const DATE_BASE = [
    `- Curso crear ChatBot de Whatsapp, precio 39 USD, requisitos saber JavaScript`,
    `- Curso crear AWS (orientado a programadores), precio 29 USD`,
    `- Curso crear Node (como crear una API Rest en Node con Express), precio 29 USD, requisitos saber JavaScript`,
  ].join('\n');
  
  // Prompt para identificar el producto de interés del cliente
  const PROMPT_DETERMINE = `
  Analiza la conversación entre el cliente (C) y el vendedor (V) para identificar el producto de interés del cliente.
  - Si el cliente muestra interés en más de un producto o no puedes determinarlo, responde 'unknown'.
  ID:
  `;
  
  // Prompt para actuar como asistente de ventas
  const PROMPT = `
  Como asistente virtual de ventas para app.codigoencasa.com, tu objetivo es persuadir a los clientes para realizar compras utilizando la BASE_DE_DATOS.
  BASE_DE_DATOS="{context}"
  INTERROGACIÓN_DEL_CLIENTE="{question}"
  
  Instrucciones:
  - No especules ni inventes respuestas.
  - Respuestas cortas ideales para WhatsApp (menos de 300 caracteres).
  - Usa emojis para darle más carácter a la comunicación.
  `;
  */
  // Nuevo prompt para actuar como asistente de estudio
  const PROMPT_CHAT = `
  -Eres un asistente de IA
  -Eres preciso con las respuestas.
  -Usa emojis para hacer la comunicación más amigable.
  -Solo diras "hola" solo en "tu primera respuesta".
  -Utiliza el NOMBRE_DEL_USUARIO para personalizar las respuestas, solo el "primer nombre".
   NOMBRE_DEL_USUARIO="{customer_name}"
  `;
  
  /*const generatePrompt = (name: string): string => {
    return PROMPT.replace('{context}', DATE_BASE).replace('{customer_name}', name);
  };
  
  const generatePromptDetermine = () => {
    return PROMPT_DETERMINE;
  };*/
  
/**
 * @Param name
 * @Param question
*/

  // Nueva función para el prompt de estudio
  const generateChatPrompt = (name:string): string => {
    return PROMPT_CHAT.replace('{customer_name}', name);
  };
  
  // Exportaciones para usar en otros módulos
  //generatePrompt, generatePromptDetermine,
  export {  generateChatPrompt };
  