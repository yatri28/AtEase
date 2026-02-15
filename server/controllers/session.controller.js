 import Session from "../models/Session.js";

export const bookSession = async (req, res) => {
  try {
    const { counselorId, date, time } = req.body;
    const studentId = req.user.id;

    const session = await Session.create({
      student: studentId,
      counselor: counselorId,
      date,
      time,
    });

    res.status(201).json({ message: "Session booked", session });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getStudentSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ student: req.user.id })
      .populate("counselor", "name")
      .sort({ date: 1 });

    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
