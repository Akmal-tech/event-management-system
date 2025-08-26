// backend/routes/payment.js
import express from "express";
import Payment from "../models/payment.js";

const router = express.Router();


// Get payment by orderId
router.get("/:orderId", async (req, res) => {
  try {
    const payment = await Payment.findOne({ orderId: req.params.orderId });
    if (!payment) {
      return res.status(404).json({ success: false, message: "Payment not found" });
    }
    res.json({ success: true, payment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});




// Dummy Payment Route
router.post("/create-order", async (req, res) => {
  const { name, email, tickets } = req.body;

  if (!name || !email || !tickets) {
    return res.status(400).json({ success: false, message: "Missing details" });
  }

  // Simulate payment processing
  setTimeout(async () => {
    const orderId = "DUMMY" + Date.now();
    const amount = tickets * 500;

    try {
      // Save to MongoDB
      const payment = new Payment({
        name,
        email,
        tickets,
        amount,
        orderId,
        status: "success",
      });

      await payment.save();

      res.json({
        success: true,
        message: "Payment successful (Dummy Gateway)",
        orderId,
        amount,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }, 2000);
});

export default router;
