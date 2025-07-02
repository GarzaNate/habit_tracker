'use client';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Simple Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Habit Tracker</h1>
        <div className="space-x-4">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/dashboard/settings" className="hover:underline">Settings</Link>
          <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={async () => {
              await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include',
              });
              window.location.href = '/login';
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
