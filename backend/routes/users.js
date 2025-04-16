const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Users route'));

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  res.status(201).json({ message: 'User registered successfully', user: { username, email } });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  if (email === 'colinceasibu01226@gmail.com' && password === 'password123') {
    const token = 'mock-jwt-token';
    const user = { username: 'Colince', email: email };
    return res.status(200).json({ token: token, user: user });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;