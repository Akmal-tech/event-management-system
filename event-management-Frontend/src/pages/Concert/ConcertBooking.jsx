// src/pages/ConcertBooking.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConcertBooking = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    tickets: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handlePayment = async () => {
  setLoading(true);
  try {
    const { data } = await axios.post("http://localhost:5000/api/payment/create-order", form);

    if (data.success) {
      navigate(`/payment-success/${data.orderId}`); // ✅ orderId passed here
    }
  } catch (error) {
    console.error("Payment error:", error);
  } finally {
    setLoading(false);
  }
};


  // navigate(`/payment-success/${res.data.orderId}`);

  // navigate("/payment-success", { state: res.data });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">

    <div className=" max-w-lg mx-auto bg-white rounded-2xl shadow-md  p-8 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Book Concert Tickets</h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          name="tickets"
          placeholder="Number of Tickets"
          min="1"
          value={form.tickets}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button
          onClick = {handlePayment } 
          
          disabled={loading}
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : `Pay ₹${form.tickets * 500}`}
        </button>
      </div>
      </div>
    </div>
  );
};

export default ConcertBooking;
