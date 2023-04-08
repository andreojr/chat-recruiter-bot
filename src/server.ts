import "dotenv/config";
import botTelegram from "./botTelegram";
import app from "./app";

botTelegram.launch();
app.listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}, () => {
    console.log("HTTP Server Running!");
});
