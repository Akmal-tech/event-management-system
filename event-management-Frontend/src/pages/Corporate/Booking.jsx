import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    attendees: "",
    details: ""
  });

  useEffect(() => {
    const pkg = JSON.parse(localStorage.getItem("selectedPackage"));
    setPackageData(pkg);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingData", JSON.stringify({ ...formData, packageData }));
    navigate("/payment");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Your Event</h1>
      {packageData && (
        <div className="text-center mb-6">
          <p className="text-lg">
            Selected Package: <span className="font-semibold">{packageData.name}</span>
          </p>
          <p className="text-pink-600 font-bold">₹{packageData.price.toLocaleString()}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="p-3 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-3 border rounded" required />
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="p-3 border rounded" />
        <input type="number" name="attendees" placeholder="Number of Attendees" value={formData.attendees} onChange={handleChange} className="p-3 border rounded" required />
        <textarea name="details" placeholder="Event Details" value={formData.details} onChange={handleChange} className="p-3 border rounded"></textarea>
        <button type="submit" className="bg-pink-600 text-white py-3 rounded hover:bg-pink-700">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Booking;
