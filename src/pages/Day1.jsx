import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Star } from "lucide-react";

const Day1Page = () => {
  const log = {
    date: "Aug 24, 2025",
    title: "Day 1: Building QuickBill AI - Phase 1",
    content: [
      {
        type: "paragraph",
        text: "Hi mawa 👋, welcome to Day 1 of building our AI tool — QuickBill AI! Today marks the official start of our journey to build a full-fledged AI-powered product."
      },
      {
        type: "paragraph",
        text: "This is Phase 1: Introduction & Foundation Setup."
      },
      {
        type: "heading",
        text: "🎯 What is QuickBill AI?"
      },
      {
        type: "list",
        items: [
          "Scan bills from photos, PDFs, receipts.",
          "Use AI to extract all details like date, total, items, taxes.",
          "Save them into a secure database.",
          "Provide reminders, insights, and expense tracking in a smooth dashboard."
        ]
      },
      {
        type: "paragraph",
        text: "Basically, it’s like your smart digital accountant — simple and headache-free."
      },
      {
        type: "heading",
        text: "🛠️ Phase 1 Focus"
      },
      {
        type: "list",
        items: [
          "Vision & Planning: Define the problem, target users, and how to make it better than existing apps.",
          "Naming & Branding: We picked QuickBill AI — simple, clear, and descriptive.",
          "Content Strategy: Document the build process daily for transparency and learning."
        ]
      },
      {
        type: "heading",
        text: "🌟 Reflections on Day 1"
      },
      {
        type: "list",
        items: [
          "Set a clear vision before starting coding.",
          "Defined branding and tone for QuickBill AI.",
          "Started a public build journey for both devs and non-devs to follow."
        ]
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto my-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 transition-all duration-500 ease-in-out relative overflow-hidden">
      
      {/* Floating stars */}
      <div className="absolute top-4 left-10 opacity-30 animate-pulse">
        <Star size={24} className="text-yellow-400" />
      </div>
      <div className="absolute top-24 right-12 opacity-20 animate-pulse delay-1000">
        <Star size={32} className="text-pink-400" />
      </div>
      <div className="absolute bottom-10 left-20 opacity-25 animate-pulse delay-500">
        <Star size={28} className="text-indigo-400" />
      </div>

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
        <span className="font-semibold">{log.date}</span>
      </div>

      {/* Post title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
        {log.title}
      </h1>

      {/* Post content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        {log.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "heading":
              return <h3 key={index} className="text-2xl font-semibold text-gray-800 mt-8 mb-4">{block.text}</h3>;
            case "list":
              return (
                <ul key={index} className="space-y-3">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <Star size={16} className="text-yellow-400 mt-1 mr-3 flex-shrink-0 animate-pulse" />
                      <p className="flex-1">{item}</p>
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Day1Page;
