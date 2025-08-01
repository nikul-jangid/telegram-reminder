const cron = require("node-cron");
const sendMessage = require("../utils/sendMessage");

const runSchedule = () => {
  // Cron expression: har 3 ghante par (0 0,3,6,9,12,15,18,21)
  cron.schedule("0 */3 * * *", () => {
    const today = new Date();
    const day = today.getDate();

    console.log(
      `Current time: ${today.getHours()}:${today.getMinutes()}, Day:${day}`
    );

    // 🧪 Testing ke liye aaj ki date aur koi bhi time chalega
    if (day === 9) {
      console.log("Test message sending...");
      sendMessage();
    }
  });
};

runSchedule();
