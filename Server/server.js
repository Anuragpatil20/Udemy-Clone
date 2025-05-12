const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const wishlistRoutes = require('./routes/wishlistRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Udemy_Clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/wishlist', wishlistRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
