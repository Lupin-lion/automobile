const express = require('express');
const cors = require('cors');
const vehiclesRouter = require('./routes/vehicles');
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/users', usersRouter);
app.use('/api/messages', messagesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});