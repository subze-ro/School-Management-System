"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Side - Background Image & Intro Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center p-10 md:p-16 h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/2.jpeg"
            alt="School Management Background"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
            priority
          />
          {/* Overlay & Blur Effect */}
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-none"></div>
        </div>

        {/* Intro Content */}
        <div className="relative z-10 text-white text-center max-w-md">
          <h1 className="text-7xl md:text-7xl font-extrabold mb-9 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-900 uppercase tracking-wide">
  Ivy Link
</h1>
<h2 className="text-3xl md:text-3xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-900 uppercase tracking-wide">
  Elevating Education with Excellence & Innovation
</h2>

          <p className="text-lg font-thin text-gray-200 mb-6">
            A modern school management s for managing students, teachers, and administration efficiently.
          </p>
        </div>
      </div>

      {/* Right Side - Action Buttons */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 p-10 md:p-16">
        <h2 className="text-xl font-thin text-gray-900 mb-4">Get Started Now</h2>
        <Link href="/auth/login" className="w-full max-w-xs">
          <button className="w-full bg-blue-400 hover:bg-blue-400 text-white font-thin py-3 rounded-lg transition-all transform hover:scale-105 shadow-md">
            Login
          </button>
        </Link>
        <Link href="/auth/signup" className="w-full max-w-xs">
          <button className="w-full bg-blue-400 hover:bg-blue-400 text-white font-thin py-3 rounded-lg transition-all transform hover:scale-105 shadow-md">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
