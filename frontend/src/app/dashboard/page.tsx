import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (!token) {
        redirect("/login");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
            <p className="mt-4 max-w-md">
                Here you can track your habits, view your progress, and manage your account.
            </p>
            <div className="mt-6 space-x-4">
                <a href="/habits" className="bg-blue-600 text-white px-4 py-2 rounded">View Habits</a>
                <a href="/settings" className="underline">Account Settings</a>
            </div>
        </div>
    );
}   