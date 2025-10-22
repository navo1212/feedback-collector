const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /api/feedback → Save new feedback
router.post('/', async (req, res) => {
  try {
    const { name, message } = req.body;
    const newFeedback = new Feedback({ name, message });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/feedback → Return all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
