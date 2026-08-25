import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <main>
            <h1>Dashboard Page</h1>
            <UserButton />
        </main>
    )
}