import { Telegraf } from "telegraf";
console.log(process.env.API_TOKEN);
export const botTelegram = new Telegraf(process.env.API_TOKEN || "");