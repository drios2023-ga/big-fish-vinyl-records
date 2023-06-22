const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  artist: String,
  title: String,
  media: String,
  grade: String,
  year: String,
  description: String,
  price: String,
  image: String
  
},{collection: 'weeklyrecords'})

module.exports = mongoose.model('Record', recordSchema);