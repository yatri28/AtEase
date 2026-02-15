import express from "express";
import Session from "../models/Session.js";

const router = express.Router();

// Book session
router.post("/book", async (req, res) => {
  try {
    const { studentId, counselorId, sessionDate, sessionTime } = req.body;

    const session = await Session.create({
      studentId,
      counselorId,
      sessionDate,
      sessionTime,
    });

    res.status(201).json({
      message: "Session request sent",
      session,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
