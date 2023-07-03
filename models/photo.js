const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    photoUrl: String,
  })

module.exports = mongoose.model('Post', postSchema);