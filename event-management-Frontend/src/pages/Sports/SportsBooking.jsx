import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SportsBooking = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    package: "silver",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/sports-payment/create-order", form);
      if (data.success) {
        navigate(`/sports-payment-success/${data.orderId}`);
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="p-6 max-w-md mx-auto shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Sports Event Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full" required />
        <input name="teamName" value={form.teamName} onChange={handleChange} placeholder="Team Name" className="border p-2 w-full" required />
        
        <select name="package" value={form.package} onChange={handleChange} className="border p-2 w-full">
          <option value="gold">Gold - ₹5000</option>
          <option value="silver">Silver - ₹3000</option>
          <option value="bronze">Bronze - ₹1500</option>
        </select>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Pay & Book
        </button>
      </form>
    </div>
    </div>
  );
};

export default SportsBooking;
