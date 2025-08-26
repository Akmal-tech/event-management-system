import mongoose from "mongoose";

const sportsPaymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  phone: String,
  teamName: String,
  package: String,
  status: { type: String, default: "SUCCESS" },
  amount: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("SportsPayment", sportsPaymentSchema);
