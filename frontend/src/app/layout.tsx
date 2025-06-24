import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Habit Tracker",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}