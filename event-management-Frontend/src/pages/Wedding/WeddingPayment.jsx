// src/pages/WeddingPayment.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const WeddingPayment = () => {
  const location = useLocation();
  const { date, time, guests } = location.state || {};

  // Example Pricing: ₹1000 per guest
  const pricePerGuest = 1000;
  const totalAmount = guests * pricePerGuest;

  const handlePayment = () => {
    alert(`✅ Payment of ₹${totalAmount} successful! Your wedding is booked 🎉`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-rose-200 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-rose-600 mb-6">💳 Payment Gateway</h1>

        {/* Booking Summary */}
        <div className="bg-rose-50 p-6 rounded-xl shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Booking Summary</h2>
          <p className="mt-2  text-lg font-bold text-black "><strong>Date:</strong> {date}</p>
          <p className="mt-2  text-lg font-bold text-black "><strong>Time:</strong> {time}</p>
          <p className="mt-2  text-lg font-bold text-black "><strong>Guests:</strong> {guests}</p>
          <p className="mt-2  text-lg font-bold text-black ">
            💰 Total: ₹{totalAmount}
          </p>
        </div>

        {/* Dummy Payment Button */}
        <button
          onClick={handlePayment}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default WeddingPayment;
