import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SportsPaymentSuccess = () => {
  const { orderId } = useParams();
  const [payment, setPayment] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {

     console.log("OrderId from params:", orderId); 

    const fetchPayment = async () => {
      try {
       const { data } = await axios.get(
  `http://localhost:5000/api/sports-payment/${orderId}`,
  { headers: { "Cache-Control": "no-cache" } }
);

  console.log("Payment state:", data);  

        setPayment(data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch payment details");
      }
    };
    fetchPayment();
  }, [orderId]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!payment) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="p-6 max-w-md mx-auto shadow rounded bg-white text-black ">
      <h2 className="text-xl font-bold text-green-600 mb-4 text-black">Payment Successful 🎉</h2>
      <p><strong>Order ID:</strong> {payment.orderId}</p>
      <p><strong>Name:</strong> {payment.name}</p>
      <p><strong>Team:</strong> {payment.teamName}</p>
      <p><strong>Package:</strong> {payment.package}</p>
      <p><strong>Amount Paid:</strong> ₹{payment.amount}</p>
      <p><strong>Status:</strong> {payment.status}</p>
    </div>
    </div>
  );
};

export default SportsPaymentSuccess;
