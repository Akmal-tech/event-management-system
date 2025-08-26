import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    tickets: { type: Number, required: true },
    amount: { type: Number, required: true },
    orderId: { type: String, required: true },
    status: { type: String, default: "success" },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
