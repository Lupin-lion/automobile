const express = require('express');
const router = express.Router();

// In-memory storage for messages
let messages = [];

router.get('/:email', (req, res) => {
  const { email } = req.params;
  const userMessages = messages.filter(msg => msg.to === email || msg.from === email);
  res.json(userMessages);
});

router.post('/', (req, res) => {
  const { from, to, content } = req.body;
  if (!from || !to || !content) {
    return res.status(400).json({ message: 'From, to, and content are required' });
  }

  const newMessage = {
    id: messages.length + 1,
    from,
    to,
    content,
    timestamp: new Date().toISOString(),
    read: false
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
});

router.put('/:id/read', (req, res) => {
  const { id } = req.params;
  const message = messages.find(msg => msg.id === parseInt(id));
  if (!message) {
    return res.status(404).json({ message: 'Message not found' });
  }
  message.read = true;
  res.json(message);
});

module.exports = router;