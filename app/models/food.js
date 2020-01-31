const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: Date,
  foods: [String],
  kcal: String,
  day: String
});

module.exports = mongoose.model('Food', foodSchema);