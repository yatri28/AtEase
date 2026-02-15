import express from "express";
import Counselor from "../models/Counselor.js";

const router = express.Router();

// Get all counselors
router.get("/", async (req, res) => {
  try {
    const counselors = await Counselor.find();
    res.json(counselors);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
