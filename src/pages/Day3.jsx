import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

const Day3Page = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 transition-all duration-500 ease-in-out">
      
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors mb-8"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Posts
      </Link>

      {/* Post meta-data */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Calendar size={16} className="mr-2 text-indigo-500" />
        <span className="font-semibold">8 Oct, 2025</span>
      </div>

      {/* Post title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
        Day 3: QuickBill AI — Choosing the Tech Stack ⚙️
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Hi mawa 👋, welcome to <span className="font-semibold text-indigo-700">Day 3</span> of building QuickBill AI.  
        Today we finalized the full tech stack — every layer that powers how our AI tool works, scales, and feels.  
        Let’s dive into what tools we’re using and where to learn them 👇
      </p>

      {/* Frontend Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frontend: Next.js 15 + React 19 + Tailwind CSS + shadcn/ui</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The frontend is powered by <span className="font-semibold text-indigo-700">Next.js 15</span> & 
          <span className="font-semibold text-indigo-700"> React 19</span> for smooth routing, performance, and scalability.  
          <span className="font-semibold text-indigo-700">Tailwind CSS</span> ensures responsive design, while 
          <span className="font-semibold text-indigo-700"> shadcn/ui</span> provides modern, accessible UI components.  
          Animations? <span className="font-semibold text-indigo-700">Framer Motion</span> got us covered.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-2">
          <a href="https://nextjs.org/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Next.js Official Docs</a>
          <a href="https://react.dev/" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 React Docs</a>
          <a href="https://tailwindcss.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Tailwind CSS Docs</a>
          <a href="https://ui.shadcn.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 shadcn/ui Docs</a>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mt-3">
          <a href="https://www.youtube.com/watch?v=Y6KDk5iyrYE" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Next.js 15 Crash Course — Traversy Media</a>
          <a href="https://www.youtube.com/watch?v=SqcY0GlETPk" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 React 19 Fundamentals — freeCodeCamp</a>
          <a href="https://www.youtube.com/watch?v=ft30zcMlFao" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Tailwind CSS Full Course — The Net Ninja</a>
          <a href="https://www.youtube.com/@shadcnui" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 shadcn/ui Tutorials — Official Channel</a>
        </div>
      </section>

      {/* Backend Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Backend: Node.js + Express</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The backend runs on <span className="font-semibold text-indigo-700">Node.js</span> with 
          <span className="font-semibold text-indigo-700"> Express</span>.  
          This stack handles API requests, user routes, and communicates with our AI layer for smart data extraction.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-2">
          <a href="https://nodejs.org/en/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Node.js Docs</a>
          <a href="https://expressjs.com/en/starter/installing.html" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Express Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mt-3">
          <a href="https://www.youtube.com/watch?v=fBNz5xF-Kx4" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Node.js Crash Course — Traversy Media</a>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g7k0UctwzP1H1V9rMwnOyc" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Express.js Tutorials — The Net Ninja</a>
        </div>
      </section>

      {/* Database Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Database: Neon + PostgreSQL</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <span className="font-semibold text-indigo-700">PostgreSQL</span> (via 
          <span className="font-semibold text-indigo-700"> Neon</span>) stores user data, bill details, and extracted values.  
          Neon is a serverless PostgreSQL platform that handles scaling and backups effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-2">
          <a href="https://www.postgresql.org/docs/" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 PostgreSQL Docs</a>
          <a href="https://neon.tech/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Neon Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mt-3">
          <a href="https://www.youtube.com/watch?v=qw--VYLpxG4" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 PostgreSQL Tutorial — Programming with Mosh</a>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication: Clerk</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <span className="font-semibold text-indigo-700">Clerk</span> makes authentication simple with pre-built UI for login, signup, and sessions.  
          It supports email, phone, Google, and GitHub logins out of the box.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-2">
          <a href="https://clerk.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Clerk Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mt-3">
          <a href="https://www.youtube.com/@clerkdocs" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Clerk Tutorials — Official Channel</a>
        </div>
      </section>

      {/* AI Layer Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Layer: Gemini API</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <span className="font-semibold text-indigo-700">Gemini API</span> is our AI brain 🧠.  
          It reads scanned receipts, extracts data like totals, items, and tax values, and structures everything neatly into JSON for storage.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-2">
          <a href="https://ai.google.dev/gemini-api/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Gemini API Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mt-3">
          <a href="https://www.youtube.com/@GoogleforDevelopers" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Gemini API Overview — Google Developers</a>
        </div>
      </section>

      {/* Cloud & DevOps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud & Deployment</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <span className="font-semibold text-indigo-700">Vercel</span> hosts the frontend, 
          <span className="font-semibold text-indigo-700"> Render</span> handles the backend,  
          and <span className="font-semibold text-indigo-700">Google Cloud</span> manages AI and file storage.  
          We use <span className="font-semibold text-indigo-700">GitHub</span> for version control and CI/CD.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-2">
          <a href="https://vercel.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Vercel Docs</a>
          <a href="https://render.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Render Docs</a>
          <a href="https://cloud.google.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Google Cloud Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mt-3">
          <a href="https://www.youtube.com/watch?v=TYCGr3AbT6k" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Vercel Deployment Guide — Traversy Media</a>
          <a href="https://www.youtube.com/watch?v=dGcsHMXbSOA" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Google Cloud Basics — TechWorld with Nana</a>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflections</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>All technologies finalized & well-integrated ⚙️</li>
          <li>Next.js + Clerk setup gives a great dev experience</li>
          <li>Gemini AI unlocks real AI capability for QuickBill</li>
          <li>Time to move to Phase 4: Development & Implementation 🚀</li>
        </ul>
      </section>
    </div>
  );
};

export default Day3Page;
