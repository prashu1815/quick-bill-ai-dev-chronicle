import { useState } from 'react';
import { Calendar, Save, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialLogData = [
  { id: 1, date: '6 oct, 2025', title: 'Day:1-> Introduction & Foundation Setup.', details: 'Kickstarted QuickBill AI! Defined QuickBill AI vision, decided the problem we are solving, chose the name & branding' },
];

const HomePage = ({ isLoggedIn }) => {
  const [logs, setLogs] = useState(initialLogData);
  const [newEntry, setNewEntry] = useState({ title: '', details: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (newEntry.title && newEntry.details) {
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      setLogs([{ id: logs.length + 1, date: today.toLocaleDateString('en-US', options), ...newEntry }, ...logs]);
      setNewEntry({ title: '', details: '' });
    }
  };

  return (
    <>
      {isLoggedIn && (
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Log Entry</h2>
          <form onSubmit={handleAddEntry} className="space-y-4">
            <div>
              <label htmlFor="title" className="sr-only">Title</label>
              <input
                name="title"
                value={newEntry.title}
                onChange={handleInputChange}
                placeholder="Title"
                id="title"
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label htmlFor="details" className="sr-only">Details</label>
              <textarea
                name="details"
                value={newEntry.details}
                onChange={handleInputChange}
                placeholder="Details"
                rows="4"
                id="details"
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors placeholder:text-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-transform transform hover:scale-105"
            >
              <Save size={20} className="mr-2" /> Save Entry
            </button>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {logs.map(log => (
          <div key={log.id} className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-2xl">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar size={18} className="mr-2 text-indigo-500" />
              <span className="font-semibold">{log.date}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-snug mb-3">
              {log.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {log.details}
            </p>
            <div className="flex justify-end mt-4">
              <Link
                to={`/day${log.id}`}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
              >
                Read Full Info
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
