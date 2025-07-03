'use client';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Main Page Content */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
