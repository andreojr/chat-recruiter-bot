import { botTelegram } from "./lib/telegram";
import { prisma } from "./lib/prisma";
import app from "./app";

interface BodyReply {
    by: string;
    content: string;
    to: string;
}

async function replyMessage(body: BodyReply) {
    const { by, content, to } = body;
    await prisma.message.create({
        data: {
            by,
            content,
            to,
            created_at: new Date(),
        },
    });

    app.io.emit("replied");
}

botTelegram.hears(/.*/g, async (ctx: any) => {
    
    const content = ctx.message.text;
    const to = ctx.message.reply_to_message?.text.split(":")[0].trim();

    if (content && to)
        await replyMessage({ by: "admin", content, to });
});

export default botTelegram;