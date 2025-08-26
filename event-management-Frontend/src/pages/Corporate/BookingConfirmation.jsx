// src/pages/BookingConfirmation.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("paymentSuccess"));
    if (!data) {
      navigate("/");
    } else {
      setPaymentData(data);
    }
  }, [navigate]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">
        🎉 Booking Confirmed!
      </h1>
      {paymentData && (
        <>
          <p className="text-lg mb-2">
            Thank you <span className="font-semibold">{paymentData.bookingData.name}</span>, 
            your booking is confirmed.
          </p>
          <p className="mb-2">
            Package: <span className="font-semibold">{paymentData.bookingData.packageData.name}</span>
          </p>
          <p className="mb-2">
            Amount Paid:{" "}
            <span className="text-pink-600 font-bold">
              ₹{paymentData.bookingData.packageData.price.toLocaleString()}
            </span>
          </p>
          <p className="mb-2">
            Payment ID: <span className="font-mono">{paymentData.paymentId}</span>
          </p>
        </>
      )}
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
      >
        Back to Home
      </button>
    </div>
  );
};

export default BookingConfirmation;
