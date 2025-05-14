const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// GET /api/courses?category=Development&level=Beginner
router.get("/", async (req, res) => {
  try {
    const { category, level } = req.query;

    // Build dynamic filter
    const filter = {};
    if (category && category !== "All") filter.category = category;
    if (level && level !== "All") filter.level = level;

    const courses = await Course.find(filter);
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Server error fetching courses." });
  }
});

module.exports = router;
