import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'ola', 'ole', 'buenas'])
    .addAnswer('¡Hola!🤗 ¿Como puedo ayudarte el día de hoy 😀?')

