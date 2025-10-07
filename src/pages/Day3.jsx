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
        <span className="font-semibold">Aug 25, 2025</span>
      </div>

      {/* Post title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
        Day 2: Building QuickBill AI - Tech Stack Overview
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Hi mawa 👋, welcome to Day 2! Today we focused on selecting and understanding our tech stack. Using the right stack is crucial for smooth development, scalability, and maintainability.
      </p>

      {/* Frontend Section */}
      <section className="mb-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frontend: React + Next.js + Tailwind CSS + shadcn/ui</h2>
  <p className="text-gray-700 mb-4 leading-relaxed">
    We are using <span className="font-semibold text-indigo-700">React</span> for building reusable components, 
    <span className="font-semibold text-indigo-700">Next.js</span> for server-side rendering and routing, 
    <span className="font-semibold text-indigo-700">Tailwind CSS</span> for utility-first styling, and 
    <span className="font-semibold text-indigo-700">shadcn/ui</span> for pre-built, accessible, modern UI components that speed up design without compromising flexibility.
  </p>
  <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
    <a href="https://react.dev/" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">React Docs</a>
    <a href="https://nextjs.org/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">Next.js Docs</a>
    <a href="https://tailwindcss.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">Tailwind CSS Docs</a>
    <a href="https://ui.shadcn.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">shadcn/ui Docs</a>
  </div>
  <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
    <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
      🎥 React Tutorials - The Net Ninja
    </a>
    <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
      🎥 Next.js Tutorials - The Net Ninja
    </a>
    <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
      🎥 Tailwind CSS Tutorials - The Net Ninja
    </a>
    <a href="https://www.youtube.com/@shadcnui" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
      🎥 shadcn/ui Tutorials - shadcn Official
    </a>
  </div>
</section>


      {/* Backend Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Backend: Node.js + Express</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For the backend, we use <span className="font-semibold text-indigo-700">Node.js</span>, a fast, scalable JavaScript runtime, together with <span className="font-semibold text-indigo-700">Express.js</span> for building APIs. This setup handles frontend requests efficiently and supports integrating AI features seamlessly.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
          <a href="https://nodejs.org/en/docs/" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">Node.js Official Docs</a>
          <a href="https://expressjs.com/en/starter/installing.html" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">Express.js Official Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
          <a href="https://www.youtube.com/watch?v=fBNz5xF-Kx4" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
            🎥 Node.js Crash Course - Traversy Media
          </a>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g7k0UctwzP1H1V9rMwnOyc" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
            🎥 Express.js Tutorials - The Net Ninja
          </a>
        </div>
      </section>

      {/* Database Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Database: Neon PostgreSQL</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We store all user data, scanned bills, and AI-extracted info in <span className="font-semibold text-indigo-700">PostgreSQL</span> using <span className="font-semibold text-indigo-700">Neon</span>. PostgreSQL supports relational data, complex queries, and is reliable for transactional workloads. Neon makes deployment, scaling, and backups seamless in the cloud.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
          <a href="https://www.postgresql.org/docs/" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">PostgreSQL Official Docs</a>
          <a href="https://neon.tech/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">Neon Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
          <a href="https://www.youtube.com/watch?v=qw--VYLpxG4" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
            🎥 PostgreSQL Tutorials - Programming with Mosh
          </a>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication: Clerk</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We are using <span className="font-semibold text-indigo-700">Clerk</span> for authentication. It handles signup, login, password resets, and session management securely, saving us from writing custom auth logic.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
          <a href="https://clerk.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">Clerk Official Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
          <a href="https://www.youtube.com/@clerkdocs" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
            🎥 Clerk Tutorials - Clerk Official Channel
          </a>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Integration: OpenAI API</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For AI-powered bill extraction, we are using <span className="font-semibold text-indigo-700">OpenAI API</span>. It helps detect dates, totals, items, taxes, and provides intelligent insights for QuickBill AI.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
          <a href="https://platform.openai.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">OpenAI API Docs</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
          <a href="https://www.youtube.com/@TheAIEpiphany" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">
            🎥 OpenAI Tutorials - The AI Epiphany
          </a>
        </div>
      </section>

      {/* Reflections */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflections</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Our tech stack is fully set up and connected.</li>
          <li>Frontend and backend environments are ready for development.</li>
          <li>Database, authentication, and AI integration are configured securely.</li>
          <li>This setup provides a solid base for building core AI features in Phase 3.</li>
        </ul>
      </section>
    </div>
  );
};

export default Day3Page;
