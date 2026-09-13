"use server";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import prisma from "@/lib/prisma";
import { roleSchema } from "@/schemas/onboarding";
import { customerProfileSchema } from "@/schemas/profile";

export async function selectRole(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const result = roleSchema.safeParse(formData.get("role"));

    if (!result.success) {
        throw new Error("Invalid role");
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user) {
        throw new Error("PetCare user not found");
    }

    await prisma.user.update({
        where: {
            clerkUserId: userId,
        },
        data: {
            role: result.data,
            onboardingStatus: "PROFILE_COMPLETION",
        },
    });

    redirect("/onboarding/profile");
}

export async function completeCustomerProfile(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const result = customerProfileSchema.safeParse({
        fullName: formData.get("fullName"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        pincode: formData.get("pincode"),
    });

    if (!result.success) {
        throw new Error("Invalid profile information");
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user) {
        throw new Error("PetCare user not found");
    }

    if (user.role !== "CUSTOMER") {
        throw new Error("This profile is only for pet owners");
    }

    await prisma.customerProfile.upsert({
        where: {
            userId: user.id,
        },
        update: {
            ...result.data,
        },
        create: {
            userId: user.id,
            ...result.data,
        },
    });

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            onboardingStatus: "COMPLETED",
        },
    });

    redirect("/dashboard");
}
