// src/pages/Concert.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Concert = () => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-5xl bg-white rounded-2xl shadow-xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          🎵 Concert Event Planning
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          From intimate music gigs to massive live concerts, we organize
          high-energy events with top-notch stage setups, sound systems,
          lighting, and artist management. Let’s create a musical night that
          your audience will never forget!
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-indigo-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-indigo-600 mb-2">🎤 Stage Setup</h2>
            <p>Professional sound systems, LED walls, and custom stage designs.</p>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-purple-600 mb-2">🎶 Artist Management</h2>
            <p>Booking musicians, DJs, and celebrity performers for your event.</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-blue-600 mb-2">💡 Lighting & Effects</h2>
            <p>Lasers, smoke machines, pyrotechnics, and stunning light shows.</p>
          </div>

          <div className="bg-indigo-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-indigo-600 mb-2">👥 Crowd Management</h2>
            <p>Security, ticketing, seating, and guest management services.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button 
         onClick= {() => navigate("/ConcertBooking")} 
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition">
            Host a Concert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Concert;
