const express = require('express');
const router = express.Router();

// In-memory storage for users (temporary, replace with a database in production)
let users = [
  { username: 'Colince', email: 'colinceasibu01226@gmail.com', password: 'password123' }
];

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if email already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  // Add new user to the in-memory array
  const newUser = { username, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', user: { username, email } });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if user exists and password matches
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = 'mock-jwt-token'; // Mock token (replace with real JWT in production)
  return res.status(200).json({ token, user: { username: user.username, email: user.email } });
});

module.exports = router;