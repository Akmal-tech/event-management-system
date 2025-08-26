import React, { useState } from "react";

const BirthdayBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePackageClick = (pkgName, pkgPrice) => {
    const pkg = { name: pkgName, price: pkgPrice };
    setFormData((prev) => ({ ...prev, package: pkgName }));
    localStorage.setItem("selectedPackage", JSON.stringify(pkg));
    document.getElementById("birthday-payment").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Payment Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPackage: ${formData.package}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-pink-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          🎂 Birthday Event Booking
        </h2>

        {/* Package Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Kids Special</h3>
            <p className="text-gray-600">₹5,000</p>
            <button
              onClick={() => handlePackageClick("Kids Special", 5000)}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Kids
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Family Celebration</h3>
            <p className="text-gray-600">₹10,000</p>
            <button
              onClick={() => handlePackageClick("Family Celebration", 10000)}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Family
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Luxury Party</h3>
            <p className="text-gray-600">₹25,000</p>
            <button
              onClick={() => handlePackageClick("Luxury Party", 25000)}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Luxury
            </button>
          </div>
        </div>

        {/* Payment Form */}
        <form id="birthday-payment" onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-pink-500"
          />

          <input
            type="text"
            value={formData.package ? formData.package : "No package selected"}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default BirthdayBooking;


