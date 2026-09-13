import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function getCurrentUser() {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    return prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });
}

export async function getOrCreateCurrentUser() {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    let user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (user) {
        return user;
    }

    const client = await clerkClient();
    const clerkUser = await client.users.getUser(userId);

    const email = clerkUser.emailAddresses[0]?.emailAddress;

    if (!email) {
        throw new Error("Authenticated Clerk user has no email");
    }

    // Check whether a PetCare user already exists with this email
    user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        // Link the existing PetCare user to the current Clerk user
        user = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                clerkUserId: userId,
            },
        });

        return user;
    }

    // No existing user — create one
    user = await prisma.user.create({
        data: {
            clerkUserId: userId,
            email,
        },
    });

    return user;
}
