'use client';

import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-semibold text-blue-700 mb-12 tracking-wide">
        Student Dashboard
      </h1>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Profile Management */}
        <Link href="/students/profile">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Profile Management
            </h2>
            <p className="text-gray-600 text-sm text-center">
              Update and manage your personal details.
            </p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              Manage Profile
            </button>
          </div>
        </Link>

        {/* Grade Management */}
        <Link href="/students/grades">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Grade Management
            </h2>
            <p className="text-gray-600 text-sm text-center">
              View and track your academic performance.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              View Grades
            </button>
          </div>
        </Link>

        {/* Student Enrollment */}
        <Link href="/students/enrollment">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Student Enrollment
            </h2>
            <p className="text-gray-600 text-sm text-center">
              Enroll in courses and manage your subjects.
            </p>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              Manage Enrollment
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}