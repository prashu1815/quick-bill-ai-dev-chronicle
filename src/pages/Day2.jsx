import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

// Phase 2: Planning & Architecture (Feature-first, MVP-focused)
// This file intentionally avoids naming specific tech stacks.
// Focus: product goals, user journeys, detailed MVP feature specs, data model drafts,
// API contract examples (generic), security, testing, rollout, and next steps.

const Day2Page = () => {
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
        Phase 2: Planning & Architecture – QuickBill AI
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Hey mawa 👋 — Phase 2 is now a hardcore planning sesh. We intentionally keep
        tech names out of this doc and focus on **what the product must do first**
        (MVP) and **how** it will behave in the wild. The goal: ship a tiny, useful
        product, learn fast, then expand.
      </p>

      {/* Product Vision & Goals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Vision & Goals</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Vision: Enable freelancers and small businesses to convert paper or photo bills
          into usable, searchable, and auditable data — with minimum friction.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Primary goal: accurate, fast extraction of key bill fields (vendor, date, total).</li>
          <li>Secondary goal: make data review & correction trivial for users.</li>
          <li>Business goal: reach initial paying customers within 3 months of launch.</li>
        </ul>
       
      </section>


      {/* User Journeys */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">User Journeys (detailed)</h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload & Extraction</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
          <li>User signs up and lands on dashboard.</li>
          <li>Clicks "Upload bill" &amp; selects image/PDF.</li>
          <li>File is uploaded to secure object storage (raw file stored).
            System enqueues extraction job.</li>
          <li>AI extraction service returns results (vendor, date, total, items).
            System stores extraction and links to raw upload.</li>
          <li>User sees a preview with highlighted fields and can accept / edit fields.
            Edited values update the extraction record and create an audit entry.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Review & Correct</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Key requirement: make corrections painless. Each editable field should have inline edit
          + a quick keyboard flow (tab to next). Maintain an audit trail for each edit.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Search & Retrieve</h3>
        <p className="text-gray-700 leading-relaxed">
          Users must find bills by vendor, date range, amount, or free-text. Provide fast filtering
          and a paginated results list. Support sorting by date and amount.
        </p>
      </section>

      {/* MVP Feature Specs (detailed) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">MVP Feature Specs (in-depth)</h2>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">1 — Upload Flow</h3>
        <p className="text-gray-700 mb-2 leading-relaxed">
          User story: "As a user, I want to upload a bill photo or PDF and quickly get extracted data"
          so I can stop typing.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>UI: drag & drop, file picker, mobile camera upload.
            Show progress percentage and optimistic UI states.</li>
          <li>Acceptance criteria: upload success &amp; queue confirmation shown within 2s.</li>
          <li>Error handling: show clear messages if file type/size unsupported.
            Allow retry and keep original file reference.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">2 — Extraction Result Display & Edit</h3>
        <p className="text-gray-700 mb-2 leading-relaxed">
          User story: "As a user, I want to correct extracted fields so the data is accurate."
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Display extracted fields with confidence scores (if available).</li>
          <li>Inline edit with quick save and clear undo option.</li>
          <li>Acceptance criteria: editable flow finishes &amp; persists within 3s; audit log entry created.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">3 — Dashboard (basic)</h3>
        <p className="text-gray-700 mb-2 leading-relaxed">
          Minimal dashboard: recent uploads, quick stats (total bills, total amount captured),
          and a search box. No heavy charts in MVP — keep it focused.
        </p>

        

      </section>


      

     {/* Developer Notes & Next Steps */}
<section className="mb-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Developer Notes & Next Steps</h2>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li>All planning and architecture discussions are wrapped up — we now have a solid blueprint for QuickBill AI’s MVP and post-launch roadmap.</li>
    <li>Next, we move to identifying and finalizing the <span className="font-semibold text-indigo-700">best tech stack</span> that perfectly fits our goals — balancing performance, scalability, and simplicity.</li>
    <li>We’ll evaluate options for frontend, backend, database, and AI integration based on developer efficiency, cost, and future growth potential.</li>
    <li>This next phase sets the foundation for hands-on development — ensuring we build smart, not just fast.</li>
  </ul>

  <p className="text-gray-700 leading-relaxed">
    Let’s gear up for <span className="font-semibold text-indigo-700">Phase 3: Choosing the Perfect Tech Stack</span> — where we’ll deep-dive into the tools that make QuickBill AI come alive. 🔥
  </p>
</section>
    </div>
  );
};

export default Day2Page;
