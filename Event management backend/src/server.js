// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./db.js";
import paymentRoutes from "./routes/payment.js";  // ✅ import


// Import routes
import eventsRoutes from "./routes/event.js";
import contactRoutes from "./routes/contact.js";
import uploadRoutes from "./routes/uploads.js";
import SportsPaymentRoutes from "./routes/SportsPayment.js";
// import paymentRoutes from "./routes/payment.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/events", eventsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/payment", paymentRoutes); // ✅ Dummy payment route
app.use("/api/sports-payment", SportsPaymentRoutes);


// Serve uploaded files
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


// Test route
app.get("/", (req, res) => {
  res.send("Hello World 🌍");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:5000`);
});
