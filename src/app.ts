import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";
import socket from "fastify-socket.io";

const app = Fastify();



app.register(cors);
app.register(socket, {
    cors: { origin: "*" }
});
app.register(routes);

app.ready(err => {
    if (err) console.log("ERRO DO WEB SOCKET: "+err.message);

    app.io.on("connection", () => {
        console.log("Usuário conectado!");
    });
});

export default app;