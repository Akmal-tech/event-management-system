// src/pages/SportsEvent.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


const SportsEvent = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 flex items-center p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          🏏 Sports Event
        </h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Join us for an exciting sports event filled with competition, teamwork,
          and fun! Whether you’re a player or a spectator, this is the place to
          experience the thrill of the game.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Event Highlights
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cricket, Football & Basketball matches</li>
              <li>Team registrations available</li>
              <li>Exciting rewards for winners</li>
              <li>Snacks & refreshments included</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Event Details
            </h2>
            <p className="text-gray-700 mb-2">
              📅 <b>Date:</b> 30th September 2025
            </p>
            <p className="text-gray-700 mb-2">
              ⏰ <b>Time:</b> 10:00 AM onwards
            </p>
            <p className="text-gray-700">
              📍 <b>Venue:</b> National Sports Complex, New Delhi
            </p>
          </div>
        </div>

        <div className="text-center">
          <button  onClick={() => navigate("/Sportsbooking")}
           className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
            Book Your Spot
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsEvent;