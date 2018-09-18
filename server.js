const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const polls = require('./routes/api/polls');
const poll = require('./routes/api/poll');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

// Use Routes
app.use('api/users', users);
app.use('api/poll', poll);
app.use('api/polls', polls);
app.use('api/profile', profile);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`port${port}`));