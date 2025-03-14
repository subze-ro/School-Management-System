'use client';

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-light text-blue-700 mb-10 tracking-wide">Admin Dashboard</h1>

      {/* Full-width Container */}
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-5xl">
        <h2 className="text-lg font-light text-gray-600 mb-8 tracking-wide">Manage Your System</h2>

        {/* Grid Layout for Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/admin/config/grades">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-light py-4 rounded-lg shadow-md transition-all">
              Configure Grades
            </button>
          </Link>
          <Link href="/admin/config/subjects">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-light py-4 rounded-lg shadow-md transition-all">
              Configure Subjects
            </button>
          </Link>
          <Link href="/admin/config/forms">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-light py-4 rounded-lg shadow-md transition-all">
              Configure Forms
            </button>
          </Link>
          <Link href="/admin/config/streams">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-sm font-light py-4 rounded-lg shadow-md transition-all">
              Configure Streams
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}