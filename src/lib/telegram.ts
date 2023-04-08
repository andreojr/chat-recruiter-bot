import { Telegraf } from "telegraf";
export const botTelegram = new Telegraf(process.env.API_TOKEN || "");