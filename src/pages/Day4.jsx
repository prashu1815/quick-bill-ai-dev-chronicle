import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, KeyRound } from "lucide-react";

const Day4Page = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-100 rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 transition-all duration-500 ease-in-out">
      
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
        <span className="font-semibold">11 Oct, 2025</span>
      </div>

      {/* Post title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
        Day 4: QuickBill AI — Setting Up Next.js Environment & Authentication 🔐
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Yo mawa 👋 welcome to <span className="font-semibold text-indigo-700">Day 4</span> of building <span className="font-semibold text-indigo-700">QuickBill AI</span>.  
        Today’s mission was short but *super* important — setting up the <span className="font-semibold text-indigo-700">Next.js environment</span> and 
        integrating <span className="font-semibold text-indigo-700">Clerk</span> for authentication.  
        In just one minute, our AI tool officially learned to say: “Hey, who are you?” 😎
      </p>

      {/* Environment Setup Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up the Next.js Environment ⚙️</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          I spun up a brand new <span className="font-semibold text-indigo-700">Next.js 15</span> app — the foundation of our entire platform.  
          Clean file structure, optimized fonts, and <span className="font-semibold text-indigo-700">Tailwind CSS</span> styling made it feel like 
          the UI is breathing on its own 😌.  
          The environment is now ready for future integrations — database, AI, and storage layers.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2">
          <a href="https://nextjs.org/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Next.js Docs</a>
          <a href="https://tailwindcss.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Tailwind Docs</a>
          <a href="https://www.youtube.com/watch?v=Y6KDk5iyrYE" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Next.js Crash Course — Traversy Media</a>
        </div>
      </section>

      {/* Clerk Authentication Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <KeyRound className="text-indigo-600" /> Adding Authentication with Clerk
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Next, I integrated <span className="font-semibold text-indigo-700">Clerk</span> — our authentication powerhouse.  
          It’s like hiring a digital bouncer 👮‍♂️ for QuickBill AI — checking who’s allowed in and who’s not.  
          Login, signup, sessions — all ready out of the box. Email, Google, GitHub... pick your key 🔑.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2">
          <a href="https://clerk.com/docs" target="_blank" className="text-indigo-600 underline hover:text-indigo-800">📘 Clerk Docs</a>
          <a href="https://www.youtube.com/@clerkdocs" target="_blank" className="text-red-600 hover:text-red-800 flex items-center gap-1">🎥 Clerk Setup in Next.js — Official Guide</a>
        </div>

        <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-sm text-gray-700">
          <span className="font-semibold">Quick setup recap:</span><br />
          1️⃣ Installed Clerk SDK<br />
          2️⃣ Added environment variables<br />
          3️⃣ Wrapped app with ClerkProvider<br />
          4️⃣ Added SignIn & SignUp components<br />
          ✅ Authentication done — under 1 minute ⚡
        </div>
      </section>

      {/* Reflection Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflections ✨</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Next.js environment up and running ✅</li>
          <li>Clerk authentication integrated successfully 🔐</li>
          <li>First sign-in & sign-up flow tested — smooth AF 😎</li>
          <li>Next goal: connect backend + database 🧩</li>
        </ul>
      </section>

      {/* Outro */}
      <p className="text-gray-700 mt-6 leading-relaxed">
        That’s a wrap for <span className="font-semibold text-indigo-700">Day 4</span>!  
        QuickBill AI just took its first *secure* breath — it finally knows who’s logging in.  
        Tomorrow, we move to backend logic & data flow. Let’s gooo 🚀
      </p>
    </div>
  );
};

export default Day4Page;
