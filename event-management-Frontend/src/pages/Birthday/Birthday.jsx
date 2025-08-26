// src/pages/Birthday.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


const Birthday = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
          🎉 Birthday Event Planning
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          Make birthdays unforgettable! We handle everything from themed décor,
          cakes, music, and entertainment to ensure the perfect celebration for
          all ages. Whether it’s a kid’s party, milestone birthday, or a surprise
          event, we’ll create magical memories.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-pink-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-pink-600 mb-2">
              🎂 Themed Decorations
            </h2>
            <p>Customized themes, balloon setups, floral décor, and lighting.</p>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-purple-600 mb-2">
              🍰 Cake & Catering
            </h2>
            <p>Delicious cakes, snacks, beverages, and full catering options.</p>
          </div>

          <div className="bg-yellow-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-yellow-600 mb-2">
              🎶 Entertainment
            </h2>
            <p>Live music, DJs, games, magicians, and fun activities for guests.</p>
          </div>

          <div className="bg-pink-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-pink-600 mb-2">
              📸 Photography
            </h2>
            <p>Professional photography & videography to capture the memories.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button onClick = {() => navigate("/BirthdayBooking")} 
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-700 transition">
            Book Your Birthday Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
