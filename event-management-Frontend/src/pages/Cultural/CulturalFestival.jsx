// src/pages/CulturalFestival.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CulturalFestival = () => {

   const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-orange-100 flex items-center justify-center p-6">
      <div className="max-w-5xl bg-white rounded-2xl shadow-xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
          🎭 Cultural Festival Event Planning
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          Celebrate heritage, traditions, and cultural diversity with vibrant 
          festivals. We bring together performances, art, music, food, and 
          community gatherings that highlight the essence of your culture.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-yellow-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-yellow-600 mb-2">🎶 Traditional Performances</h2>
            <p>Folk dances, cultural dramas, and live musical shows.</p>
          </div>

          <div className="bg-red-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-red-600 mb-2">🎨 Art & Craft Exhibitions</h2>
            <p>Handicrafts, cultural artwork, and traditional displays.</p>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-orange-600 mb-2">🍴 Traditional Cuisine</h2>
            <p>Food stalls serving authentic cultural dishes and beverages.</p>
          </div>

          <div className="bg-yellow-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-yellow-600 mb-2">🎇 Community Activities</h2>
            <p>Competitions, workshops, parades, and cultural games.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button onClick={() => navigate("/CulturalBooking")} 
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition">
            Host a Cultural Festival
          </button>
        </div>
      </div>
    </div>
  );
};

export default CulturalFestival;
