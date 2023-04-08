import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";
import { botTelegram } from "./lib/telegram";


export async function routes(app: FastifyInstance) {

    app.get("/", (request, reply) => {
        return "Chat Recruiter Bot";
    });
    
    app.get("/messages/:ip", async (request: any, reply) => {

        const { ip } = request.params;
        const results = await prisma.message.findMany({
            where: {
                OR: [
                    { by: ip },
                    { to: ip },
                ]
            }
        });

        return results;
    });

    app.post("/messages", async (request) => {

        const createMessageBody = z.object({
            by: z.string(),
            content: z.string(),
            to: z.string(),
        });
        const { by, content, to } = createMessageBody.parse(request.body);
        botTelegram.telegram.sendMessage("6186850198", `${by}: ${content}`);
        await prisma.message.create({
            data: {
                by,
                content,
                to,
                created_at: new Date(),
            },
        });

        app.io.emit("update-messages");
    });

}