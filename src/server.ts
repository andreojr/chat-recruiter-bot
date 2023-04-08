import dotenv from "dotenv/config";
import app from "./app";
import botTelegram from "./botTelegram";

botTelegram.launch();
app.listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}, () => {
    console.log("HTTP Server Running!");
});
