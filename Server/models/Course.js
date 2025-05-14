const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  thumbnail: String,
  price: Number,
  rating: Number,
  category: String, // e.g., Development, Design, Marketing
  level: String,    // e.g., Beginner, Intermediate, Advanced
});

module.exports = mongoose.model("Course", courseSchema);
