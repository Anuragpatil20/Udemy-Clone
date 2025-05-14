const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Udemy_Clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/wishlist", wishlistRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
