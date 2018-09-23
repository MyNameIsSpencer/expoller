const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


// @route   GET api/polls/test
// @desc    Tests polls route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Polls route is operational"}));

// Poll model
const Poll = require('../../models/Poll');

// Validation


// @route   GET api/polls
// @desc    Get polls
// @access  Public
router.get('/', (req, res) => {
  Poll.find()
    .sort({ date: -1 })
    .then(polls => res.json(polls))
    .catch(err => res.status(404).json({ nopollsfound: 'No Polls found' }));
});

// @route   GET api/polls/:id
// @desc    Tests polls route
// @access  Public
// router.get('/:id', (req, res) => {
//
// }

// @route   POST api/polls
// @desc    Create poll
// @access  Private
router.post(
  '/',
  //   VVVV  the 'jwt' refers to the strategy made in the config passport file
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // const { errors, isValid }
    const newPoll = new Poll({
      creator:  req.user.id,
      name:     req.body.name,
      inquiry:  req.body.inquiry
    });

  newPoll.save().then(poll => res.json(poll));
});




module.exports = router;
