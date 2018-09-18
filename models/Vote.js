const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VoteSchema = new Schema({
  option: {
    type: Schema.Types.Objectid,
    ref: 'option'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Vote = mongoose.model('vote', VoteSchema);
