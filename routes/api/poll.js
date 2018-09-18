const express = require('express');
const router = express.Router();


// @route   GET api/poll/test
// @desc    Tests poll route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Poll Route Operational"}));


module.exports = router;
