import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { completeCustomerProfile } from "@/actions/onboarding";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (!user.role) {
    redirect("/onboarding/role");
  }

  if (user.onboardingStatus === "COMPLETED") {
    redirect("/dashboard");
  }

  if (user.role !== "CUSTOMER") {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Profile setup
          </h1>

          <p className="mt-2 text-gray-600">
            Your {user.role.toLowerCase().replace("_", " ")} profile
            setup is coming next.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            Step 2 of 2
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Complete your profile
          </h1>

          <p className="mt-2 text-gray-600">
            Tell us a little about yourself so we can
            personalize your PetCare experience.
          </p>
        </div>

        <form
          action={completeCustomerProfile}
          className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2"
            >
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="9876543210"
              maxLength={10}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium mb-2"
            >
              Address
            </label>

            <textarea
              id="address"
              name="address"
              placeholder="House no., street, locality"
              rows={3}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium mb-2"
              >
                City
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="Delhi"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium mb-2"
              >
                State
              </label>

              <input
                id="state"
                name="state"
                type="text"
                placeholder="Delhi"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="pincode"
              className="block text-sm font-medium mb-2"
            >
              Pincode
            </label>

            <input
              id="pincode"
              name="pincode"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="110001"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white hover:opacity-90"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </main>
  );
}