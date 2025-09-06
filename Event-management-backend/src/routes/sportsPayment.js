import express from "express";
import SportsPayment from "../models/SportsPayment.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// Create dummy payment order
router.post("/create-order", async (req, res) => {
  try {
    const { name, email, phone, teamName, package: pkg } = req.body;

    // Generate dummy orderId
    const orderId = uuidv4();

    // Save into MongoDB
    const payment = new SportsPayment({
      orderId,
      name,
      email,
      phone,
      teamName,
      package: pkg,
      status: "SUCCESS", // always success in dummy gateway
      amount: pkg === "gold" ? 5000 : pkg === "silver" ? 3000 : 1500,
      date: new Date(),
    });

    await payment.save();

    res.json({
      success: true,
      message: "Payment successful (dummy)",
      orderId,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get payment details by orderId
router.get("/:orderId", async (req, res) => {
  try {
    const payment = await SportsPayment.findOne({ orderId: req.params.orderId });
    if (!payment) {
      return res.status(404).json({ success: false, message: "Payment not found" });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
