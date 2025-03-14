import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl text-red font-bold mb-8">School Management System</h1>
      <div className="space-y-4">
        <Link href="/auth/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </Link>
        <Link href="/auth/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
        </Link>
      </div>
    </div>
  );
}