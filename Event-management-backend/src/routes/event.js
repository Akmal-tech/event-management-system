import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  image: String
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);





// import express from "express";
// import initDB from "../db.js";

// const router = express.Router();

// // Get all events
// router.get("/", async (req, res) => {
//   const db = await initDB();
//   const events = await db.all("SELECT * FROM events");
//   res.json(events);
// });

// // Add new event
// router.post("/", async (req, res) => {
//   const { title, description, date, image } = req.body;
//   if (!title) return res.status(400).json({ error: "Title is required" });

//   const db = await initDB();
//   await db.run(
//     "INSERT INTO events (title, description, date, image) VALUES (?, ?, ?, ?)",
//     [title, description, date, image]
//   );

//   res.json({ message: "Event created successfully" });
// });

// export default router;
// // export { router };
