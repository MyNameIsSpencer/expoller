const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PollSchema = new Schema({
  creator: {
    type: Schema.Types.Objectid,
    ref: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  }
});

module.exports = Poll = mongoose.model('poll', PollSchema);
