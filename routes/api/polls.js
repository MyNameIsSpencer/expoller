const express = require('express');
const router = express.Router();


// @route   GET api/polls/test
// @desc    Tests polls route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "User World"}));


module.exports = router;
