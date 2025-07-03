"use client";

import Link from "next/link";

export default function Navbar() {
  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/login";
  };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Habit Tracker</h1>
        <div className="space-x-4">
            <Link href="/dashboard" className="hover:underline">
            Dashboard
            </Link>
            <Link href="/dashboard/settings" className="hover:underline">
            Settings
            </Link>
            <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={handleLogout}
            >
            Logout
            </button>
        </div>
        </nav>
    );
}
