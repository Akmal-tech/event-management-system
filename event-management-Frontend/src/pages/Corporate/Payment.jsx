// src/pages/CorporatePayment.js
import React, { useState } from "react";

const CorporatePayment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy validation
    if (formData.cardNumber && formData.expiry && formData.cvv && formData.name) {
      setSuccess(true);
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
          Corporate Event Payment
        </h2>
        
        {success ? (
          <div className="text-center">
            <h3 className="text-green-600 font-semibold mb-4">
              ✅ Payment Successful!
            </h3>
            <p className="text-gray-700">Your booking has been confirmed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Cardholder Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                maxLength="16"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  placeholder="123"
                  maxLength="3"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Pay Now ₹5000
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CorporatePayment;
