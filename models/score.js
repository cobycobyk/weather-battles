const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  name: String,
  score: Number,
}, {
  timestamps: true
})

module.exports = mongoose.model('Score', scoreSchema);