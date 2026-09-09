import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req);

        console.log("Clerk webhook received:", evt.type);

        if (evt.type === "user.created") {
            console.log("New Clerk user:", evt.data.id);
        }

        return new Response("Webhook received", { status: 200 });
    } catch (error) {
        console.error("Webhook verification failed:", error);

        return new Response("Invalid webhook", { status: 400 });
    }
}
