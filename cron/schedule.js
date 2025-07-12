// const cron = require("node-cron");
// const sendMessage = require("../utils/sendMessage");

// const runSchedule = () => {
//   const times = ["09:00", "12:00", "15:00", "18:00"];

//   times.forEach((time) => {
//     const [hour, minute] = time.split(":");

//     cron.schedule(`${minute} ${hour} * * *`, () => {
//       const today = new Date();
//       const day = today.getDate();

//       if (day === 9) {
//         console.log(`Sending reminder at ${item}...`);
//         sendMessage();
//       }
//     });
//   });
// };

// runSchedule();

const cron = require("node-cron");
const sendMessage = require("../utils/sendMessage");

const runSchedule = () => {
  // ⏱ Har 1 minute me run kare
  cron.schedule("*/1 * * * *", () => {
    const today = new Date();
    const day = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();

    console.log(`🕒 Current time: ${hour}:${minute}, 📅 Day: ${day}`);

    // 🧪 Testing ke liye aaj ki date aur koi bhi time chalega
    if (day === 12) {
      console.log("📤 Test message sending...");
      sendMessage();
    }
  });
};

runSchedule();
