const mongoose = require('mongoose')

var LinkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('Link', LinkSchema);
