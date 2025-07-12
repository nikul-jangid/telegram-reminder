const axios = require("axios");
require("dotenv").config();
const message = require("../message");

const sendMessage = async () => {
  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  try {
    const res = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message.text,
      }
    );
    console.log("Message send:", res.data.ok);
  } catch (err) {
    console.log("Failed to send message:", err.message);
  }
};

module.exports = sendMessage;
