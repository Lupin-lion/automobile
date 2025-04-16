const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for specific origins
app.use(cors({
  origin: ['http://127.0.0.1:8080', 'https://themarts.netlify.app'], // Allow local dev and Netlify
  methods: ['GET', 'POST'], // Allow GET and POST methods
  credentials: true, // Allow cookies/auth headers if needed
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/vehicles', require('./routes/vehicles'));

// Basic health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));