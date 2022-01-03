import cron from "node-cron";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const endpoint = process.env.WEBHOOKENDPOINT;

const holeId = process.env.WEEKLYHOLEID;

const api = axios.create({
  baseURL: endpoint,
});

const firstReminder = "0 16 * * 5";
const secondReminder = "45 19 * * 5";
const finalReminder = "10 20 * * 5";

const avatar_url =
  "https://i0.wp.com/hero99.com.br/wp-content/uploads/2019/02/favicon.png?fit=512%2C512&ssl=1";

cron.schedule(firstReminder, async () => {
  await api.post("", {
    username: "Weekly é hoje!",
    avatar_url,
    content: ` <@&${holeId}> boa tarde devs! Hoje é dia da weekly sextou, bora organizar o que seu time fez essa semana e já pode botar a bera pra gelar!`,
  });
});

cron.schedule(secondReminder, async () => {
  await api.post("", {
    username: "Weekly logo logo!",
    avatar_url,
    content: ` <@&${holeId}> logo mais a weekly vai começar, não esqueçam!`,
  });
});

cron.schedule(finalReminder, async () => {
  await api.post("", {
    username: "Weekly é agora!",
    avatar_url,
    content: ` <@&${holeId}> tá começando galera! Bora bora bora!`,
  });
});

console.log(
  `Reminders up: "${firstReminder}" &  "${secondReminder}" &  "${finalReminder}"; `,
);
