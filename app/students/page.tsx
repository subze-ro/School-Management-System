'use client';

import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-8">Student Dashboard</h1>
      <div className="space-y-4">
        <Link href="/students/profile">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-48">Profile Management</button>
        </Link>
        <Link href="/students/grades">
          <button className="bg-green-500 text-white px-4 py-2 rounded w-48">Grade Management</button>
        </Link>
        <Link href="/students/enrollment">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded w-48">Student Enrollment</button>
        </Link>
      </div>
    </div>
  );
}