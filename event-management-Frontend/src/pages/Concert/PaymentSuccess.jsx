// src/pages/PaymentSuccess.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/payment/${orderId}`);
        setPayment(res.data.payment);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [orderId]);

  if (loading) {
    return <div className="text-center text-white min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!payment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-red-400">⚠️ Payment Not Found</h1>
        <button
          onClick={() => navigate("/Services")}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-4xl font-bold text-green-400 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg mb-6">Thank you for booking with Indian Events.</p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <p><span className="font-semibold">Name:</span> {payment.name}</p>
        <p><span className="font-semibold">Email:</span> {payment.email}</p>
        <p><span className="font-semibold">Tickets:</span> {payment.tickets}</p>
        <p><span className="font-semibold">Order ID:</span> {payment.orderId}</p>
        <p><span className="font-semibold">Amount Paid:</span> ₹{payment.amount}</p>
        <p><span className="font-semibold">Status:</span> {payment.status}</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition-all"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
