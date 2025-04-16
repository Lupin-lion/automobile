const mongoose = require('mongoose');

const uri = "mongodb+srv://ColinceLupin:10Million$$@colincelupin.bc8p5u7.mongodb.net/?retryWrites=true&w=majority&appName=ColinceLupin";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));