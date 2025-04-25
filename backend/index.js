import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import cors from "cors";
import authRouter from "./routes/auth.js"; // Import your auth routes

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if PORT is not defined

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS (Adjust the origin based on your frontend URL)
app.use(cors({
   origin: 'http://localhost:5173', // Replace with your frontend URL
 }));

// Test route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Use the authentication routes
app.use("/api/auth", authRouter);

// Connect to the database and start the server
connectDb();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
