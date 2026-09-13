import { verifyWebhook } from "@clerk/nextjs/webhooks";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req);

        if (evt.type === "user.created") {
            const clerkUserId = evt.data.id;

            const email = evt.data.email_addresses?.[0]?.email_address;

            if (!email) {
                console.error("No email found for Clerk user:", clerkUserId);

                return new Response("Email not found", {
                    status: 400,
                });
            }

            const user = await prisma.user.upsert({
                where: {
                    clerkUserId,
                },
                update: {},
                create: {
                    clerkUserId,
                    email,
                },
            });

            console.log("PetCare user created:", user.id);
        }

        return new Response("Webhook received", {
            status: 200,
        });
    } catch (error) {
        console.error("Clerk webhook error:", error);

        return new Response("Webhook failed", {
            status: 400,
        });
    }
}
