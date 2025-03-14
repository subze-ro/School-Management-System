'use client';

import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-semibold text-blue-700 mb-12 tracking-wide">
        Teacher Dashboard
      </h1>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Grade Management */}
        <Link href="/teacher/grades">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Grade Management
            </h2>
            <p className="text-gray-600 text-sm text-center">
              Manage student grades efficiently with an intuitive system.
            </p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              Go to Grades
            </button>
          </div>
        </Link>

        {/* View Students */}
        <Link href="/teacher/students">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              View Students
            </h2>
            <p className="text-gray-600 text-sm text-center">
              Access student lists and details in one place.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              View Students
            </button>
          </div>
        </Link>

        {/* Configure Streams */}
        <Link href="/teacher/streams">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Configure Streams
            </h2>
            <p className="text-gray-600 text-sm text-center">
              Assign students to different streams easily.
            </p>
            <button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              Manage Streams
            </button>
          </div>
        </Link>

        {/* Configure Subjects */}
        <Link href="/teacher/subjects">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center cursor-pointer transform hover:scale-105">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Configure Subjects
            </h2>
            <p className="text-gray-600 text-sm text-center">
              Manage subjects and their assignments.
            </p>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
              Manage Subjects
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}