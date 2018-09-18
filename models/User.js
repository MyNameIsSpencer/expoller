const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  datejoin: {
    type: Date,
    default: Date.now
  },
  dob: {
    type: Date
  },
  education: [
    {
      yearseducation: {
        type: Number
      },
      highestleveleducation: {
        type: String
      },
      school: {
        type: String,
      },
      fieldofstudy: [
        {
          type: String,
        }
      ]
    }
  ],
  gender: {
    type: String
  },
  hiredate: {
    type: Date
  },
  leavedate: {
    type: Date
  },
  jobtitle: {
    type: String
  },
  salary: {
    type: Number
  },
  worklocation: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  creator: {
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model('user', UserSchema);
