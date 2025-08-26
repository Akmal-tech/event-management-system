import React, { useState } from "react";


const CulturalBooking = () => {
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
    document.getElementById("cultural-payment").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Payment Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPackage: ${formData.package}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          🎭 Cultural Festival Booking
        </h2>

        {/* Package Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Basic</h3>
            <p className="text-gray-600">₹100</p>
            <button
              onClick={() => handlePackageClick("Basic", 100)}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Basic
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Standard</h3>
            <p className="text-gray-600">₹250</p>
            <button
              onClick={() => handlePackageClick("Standard", 250)}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Standard
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">VIP</h3>
            <p className="text-gray-600">₹500</p>
            <button
              onClick={() => handlePackageClick("VIP", 500)}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose VIP
            </button>
          </div>
        </div>

        {/* Payment Form */}
        <form id="cultural-payment" onSubmit={handleSubmit} className="space-y-4">
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

export default CulturalBooking;
