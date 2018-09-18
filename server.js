const express = require('express');
const mongoose = require('mongoose');

const poll = require('./routes/api/poll');
const polls = require('./routes/api/polls');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

// Use Routes
app.use('/api/poll', poll);
app.use('/api/polls', polls);
app.use('/api/profile', profile);
app.use('/api/users', users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port${port}`));
