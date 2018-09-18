const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OptionSchema = new Schema({
  poll: {
    type: Schema.Types.Objectid,
    ref: 'poll'
  },
  description: {
    type: String
  },
  text: {
    type: String
  },

});

module.exports = Option = mongoose.model('option', OptionSchema);
