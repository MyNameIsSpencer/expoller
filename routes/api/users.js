const express = require('express');
const router = express.Router();


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "User World"}));

// @route   POST api/users/register
// @desc    Register User
// @access  Public
router.post('/test', (req, res) => {
  User.findOne({ email: req.body.email })
    .then( user =>
      if(user) {
        return res.status(400).json({email: 'Email already exists'});
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          description: req.body.description,
          datejoin: req.body.datejoin,
          dob: req.body.dob,
          education: req.body.education,
          gender: req.body.gender,
          hiredate: req.body.hiredate,
          leavedate: req.body.leavedate,
          jobtitle: req.body.jobtitle,
          salary: req.body.salary,
          worklocation: req.body.worklocation,
          country: req.body.country,
          city: req.body.city,
          address: req.body.address,
          creator: req.body.creator
      }
    );
});


module.exports = router;
