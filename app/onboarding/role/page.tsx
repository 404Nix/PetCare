import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { selectRole } from "@/actions/onboarding";

export default async function RolePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (user.onboardingStatus === "COMPLETED") {
    redirect("/dashboard");
  }

  if (user.onboardingStatus === "PROFILE_COMPLETION") {
    redirect("/onboarding/profile");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">
            Welcome to PetCare 🐾
          </h1>

          <p className="mt-2 text-muted-foreground">
            How will you use PetCare?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <form action={selectRole}>
            <input
              type="hidden"
              name="role"
              value="CUSTOMER"
            />

            <button
              type="submit"
              className="w-full rounded-xl border p-8 text-left hover:border-black transition"
            >
              <div className="text-4xl mb-4">🐾</div>

              <h2 className="text-xl font-semibold">
                Pet Owner
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Find veterinarians, manage your pets,
                and book appointments.
              </p>
            </button>
          </form>

          <form action={selectRole}>
            <input
              type="hidden"
              name="role"
              value="CLINIC"
            />

            <button
              type="submit"
              className="w-full rounded-xl border p-8 text-left hover:border-black transition"
            >
              <div className="text-4xl mb-4">🏥</div>

              <h2 className="text-xl font-semibold">
                Veterinary Clinic
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Manage your clinic, appointments,
                and availability.
              </p>
            </button>
          </form>

          <form action={selectRole}>
            <input
              type="hidden"
              name="role"
              value="PET_SHOP"
            />

            <button
              type="submit"
              className="w-full rounded-xl border p-8 text-left hover:border-black transition"
            >
              <div className="text-4xl mb-4">🛍️</div>

              <h2 className="text-xl font-semibold">
                Pet Shop
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                List your shop, services, and
                business information.
              </p>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}