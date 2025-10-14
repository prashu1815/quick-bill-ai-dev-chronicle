import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, LayoutDashboard } from "lucide-react";

const Day5Page = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-gradient-to-br from-rose-50 via-pink-50 to-red-100 rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 transition-all duration-500 ease-in-out">
      
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
        <Calendar size={16} className="mr-2 text-rose-500" />
        <span className="font-semibold">14 Oct, 2025</span>
      </div>

      {/* Post title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
        Day 5: QuickBill AI — Frontend Complete! Navbar, Pages & Upload Flow 🚀
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Ayy mawa 🔥 <span className="font-semibold text-rose-700">Day 5</span> was *frontend domination day* for{" "}
        <span className="font-semibold text-rose-700">QuickBill AI</span>.  
        The whole UI now looks clean, sleek, and futuristic — just the way our AI billing beast deserves.  
        Every route now clicks, slides, and flows smoother than butter 😎.
      </p>

      {/* Navbar + Pages Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The New Navbar & Pages 🧭</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Built a stylish <span className="font-semibold text-rose-700">Navbar</span> that welcomes users after login, 
          giving them quick access to all sections — <span className="font-semibold">Home</span>,{" "}
          <span className="font-semibold">Features</span>, <span className="font-semibold">About Us</span>,{" "}
          <span className="font-semibold">Upload</span>, <span className="font-semibold">Uploaded Data</span>,{" "}
          <span className="font-semibold">Help</span>, and <span className="font-semibold">Signout</span>.  
          Each page flows in with subtle Framer Motion vibes, keeping the UX crisp and modern 💫.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🧠 <strong>Home:</strong> Welcoming dashboard with intro to QuickBill AI</li>
          <li>⚙️ <strong>Features:</strong> Highlighting core AI billing powers</li>
          <li>📄 <strong>Upload:</strong> Securely upload bills for instant AI processing</li>
          <li>📅 <strong>Uploaded Data:</strong> Now filterable by <strong>date, month, and year</strong> 🔍</li>
          <li>🙋 <strong>Help:</strong> Clean guide for new users</li>
          <li>🚪 <strong>Signout:</strong> Smooth exit (no drama)</li>
        </ul>
      </section>

      {/* Upload Data Filtering Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Upload Data Filters 📊</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Added advanced filters for uploaded bills — now users can search their invoices by{" "}
          <span className="font-semibold text-rose-700">date, month, or year</span>.  
          It’s like having a personal accountant who’s also a data ninja 🥷.
        </p>

        <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-xl text-sm text-gray-700">
          <span className="font-semibold">Frontend Milestones:</span><br />
          ✅ Navbar — responsive & animated<br />
          ✅ Pages — Home, Features, About, Upload, Help<br />
          ✅ Filters — date/month/year for Uploaded Data<br />
          ✅ Signout flow — clean and functional<br />
          💥 UI — consistent and aesthetic
        </div>
      </section>

      {/* Reflection Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflections ✨</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Frontend foundation is fully ready 🏗️</li>
          <li>Every route works like a charm ⚡</li>
          <li>Upload and filter system is future-proof 🔍</li>
          <li>Next: backend integration for uploads & user data 🔗</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/prashu1815/quick-bill-ai-dev-chronicle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition-all duration-300"
        >
          💻 View Code on GitHub
        </a>
      </div>

      {/* Outro */}
      <p className="text-gray-700 mt-8 leading-relaxed">
        That’s it for <span className="font-semibold text-rose-700">Day 5</span>!  
        QuickBill AI’s frontend is now fully alive — it’s not just a website anymore, it’s an experience 💫.  
        Next up: connecting the backend to handle real-time data uploads and AI analysis.  
        Stay tuned — the magic’s about to get real 🔥.
      </p>
    </div>
  );
};

export default Day5Page;
