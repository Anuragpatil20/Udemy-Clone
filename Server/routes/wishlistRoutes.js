const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');

// Add course to wishlist
router.post('/add', async (req, res) => {
  const { userId, course } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, courses: [course] });
    } else {
      const exists = wishlist.courses.find(c => c.id === course.id);
      if (!exists) wishlist.courses.push(course);
    }

    await wishlist.save();
    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add course to wishlist.' });
  }
});

// Get wishlist by userId
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });
    res.status(200).json(wishlist ? wishlist.courses : []);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wishlist.' });
  }
});

// Remove course from wishlist
router.delete('/remove/:userId/:courseId', async (req, res) => {
  const { userId, courseId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) return res.status(404).json({ error: 'Wishlist not found.' });

    wishlist.courses = wishlist.courses.filter(course => course.id !== courseId);
    await wishlist.save();

    res.status(200).json({ message: 'Course removed from wishlist.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove course.' });
  }
});

module.exports = router;
