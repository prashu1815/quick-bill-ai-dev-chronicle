import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { User } from 'lucide-react';

// Import the page components
import HomePage from './pages/HomePage.jsx';
import Day1Page from './pages/Day1.jsx';
import Day2Page from './pages/Day2.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const password = window.prompt("Please enter the secret code to log in:");
    if (password === 'Sai%1815hs') {
      setIsLoggedIn(true);
      alert("Login successful! You can now add new entries.");
    } else {
      alert("Incorrect code. Access denied.");
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 font-sans p-4 sm:p-6 lg:p-8 text-gray-200">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/dyhbpohrb/image/upload/v1756105513/Gemini_Generated_Image_k8aon3k8aon3k8ao_q7a4af.png"
                alt="QuickBill AI Logo"
                className="w-14 h-14 rounded-full shadow-lg border-2 border-indigo-500 object-cover"
              />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  QuickBill AI Dev Log
                </h1>
                <p className="mt-1 text-gray-300 text-sm sm:text-base">
                  Documenting the journey of building our AI tool, day by day.
                </p>
              </div>
            </Link>
            {/* Author Login/Logout */}
            <button
              onClick={isLoggedIn ? () => setIsLoggedIn(false) : handleLogin}
              className="flex items-center justify-center w-12 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              title={isLoggedIn ? 'Logout' : 'Author Login'}
            >
              <User size={22} />
            </button>
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
            <Route path="/day1" element={<Day1Page />} />
            <Route path="/day2" element={<Day2Page />} />
          </Routes>

          {/* Footer */}
          {/* Footer */}
<footer className="mt-12 text-center text-gray-400 text-sm">
  <p>© 2025 QuickBill AI. All rights reserved.</p>
</footer>

        </div>
      </div>
    </Router>
  );
};

export default App;
