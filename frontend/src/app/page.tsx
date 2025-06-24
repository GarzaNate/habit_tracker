export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">Track Your Habits, Change Your Life</h1>
      <p className="mt-4 max-w-md">
        Build streaks, stay accountable, and crush your goals with our simple habit tracker.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</a>
        <a href="/login" className="underline">Login</a>
      </div>
    </div>
  );
}