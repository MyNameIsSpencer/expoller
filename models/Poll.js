const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PollSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  inquiry: {
    type: String,
    required: true
  },
  options: [
    {
      text: {
        type: String
      },
      description: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  }
});

module.exports = Poll = mongoose.model('poll', PollSchema);
