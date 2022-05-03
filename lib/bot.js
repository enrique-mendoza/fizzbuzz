const TelegramBot = require('node-telegram-bot-api');
const ExplorerController = require('./controllers/ExplorerController');

// replace the value below with the Telegram token you receive from @BotFather
require('dotenv').config();
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    let mission = msg.text.toLowerCase();
    let responseBot = '';

    if(!isNaN(numberToApplyFb)){
      const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
      responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
      return bot.sendMessage(chatId, responseBot);
    }    

    if(mission === 'node' || mission === 'java') {
      const explorers = ExplorerController.getJoinExplorersUsernamesByMission(mission);
      responseBot = `Lista de explorers en misión ${mission}: ${explorers}`;
      return bot.sendMessage(chatId, responseBot);
    }

    return bot.sendMessage(chatId, 'Envía un número válido');
});