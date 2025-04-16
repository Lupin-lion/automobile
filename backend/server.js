const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your Netlify domain
app.use(cors({
  origin: ['http://127.0.0.1:8080', 'https://the-marts-motors.netlify.app'], // Allow local dev and Netlify
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/vehicles', require('./routes/vehicles'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));