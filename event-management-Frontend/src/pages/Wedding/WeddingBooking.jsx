// src/pages/WeddingBooking.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WeddingBooking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass booking data to payment page
    navigate("/WeddingPayment", { state: { date, time, guests } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-rose-200 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">
          📝 Book Your Wedding Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Select Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Select Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Number of Guests:</label>
            <input
              type="number"
              min="20"
              max="1000"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Enter number of guests"
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeddingBooking;
