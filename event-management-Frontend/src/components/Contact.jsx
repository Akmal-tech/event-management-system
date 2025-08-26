import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      alert(res.data.msg || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-black">Have an event in mind?</h2>
        <p className="text-gray-600 mb-10">
          Let’s make it extraordinary together!
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-3 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-3 rounded"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="border p-3 rounded"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
