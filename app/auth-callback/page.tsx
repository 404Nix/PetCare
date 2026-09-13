import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { getOrCreateCurrentUser } from "@/lib/auth";

export default async function AuthCallbackPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const user = await getOrCreateCurrentUser();

    if (!user) {
        throw new Error("Unable to create PetCare user");
    }

    if (user.onboardingStatus === "ROLE_SELECTION") {
        redirect("/onboarding/role");
    }

    if (user.onboardingStatus === "PROFILE_COMPLETION") {
        redirect("/onboarding/profile");
    }

    if (user.onboardingStatus === "COMPLETED") {
        redirect("/dashboard");
    }

    redirect("/onboarding/role");
}