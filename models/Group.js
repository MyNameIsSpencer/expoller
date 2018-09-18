const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GroupSchema = new Schema({
  creator: {
    type: Schema.Types.Objectid,
    ref: 'user',
    required: true
  },
  users: [
    {
      type:Schema.Types.Objectid,
      ref: 'user'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = Group = mongoose.model('group', GroupSchema);
