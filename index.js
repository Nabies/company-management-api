require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// JWT Auth Middleware
const authenticateToken = require('./utils/authMiddleware');

// Public login route to generate JWT token
const jwt = require('jsonwebtoken');
app.post('/login', (req, res) => {
  // In a real app, validate user credentials here
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  // Example payload
  const payload = { username };
  // Use a private key from config or env
  const privateKey = process.env.JWT_PRIVATE_KEY || 'your-256-bit-secret';
  const token = jwt.sign(payload, privateKey, { expiresIn: '1h', algorithm: 'HS256' });
  res.json({ token });
});

app.use(authenticateToken);


// Company routes
const companyRoutes = require('./routes/companyRoutes');
app.use('/companies', companyRoutes);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
