const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  id: String,
  title: String,
  thumbnail: String,
  instructor: String,
  price: Number,
  rating: Number,
});

const WishlistSchema = new mongoose.Schema({
  userId: String,
  courses: [CourseSchema],
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
