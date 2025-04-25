import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10); // Create salt (number of rounds)
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save(); // Save user to database
    res.status(201).json({
      message: "User registered successfully",
      userId: savedUser._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Compare provided password with hashed password
  const isMatch = await bcrypt.compare(password, user.password); // Compare the hash
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // If passwords match, generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Set token expiry to 1 hour
  });

  res.json({ message: "Login successful", token });
});

export default router;
