'use client';

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-black mb-8">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link href="/admin/config/grades">
          <button className="w-48 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Configure Grades
          </button>
        </Link>
        <Link href="/admin/config/subjects">
          <button className="w-48 bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Configure Subjects
          </button>
        </Link>
        <Link href="/admin/config/forms">
          <button className="w-48 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
            Configure Forms
          </button>
        </Link>
        <Link href="/admin/config/streams">
          <button className="w-48 bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
            Configure Streams
          </button>
        </Link>
      </div>
    </div>
  );
}