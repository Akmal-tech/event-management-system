// src/routes/contact.js
import express from "express";
import Contact from "../models/contact.js";  // ✅ fixed path

const router = express.Router();

// Handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
