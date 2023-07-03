const Photo = require('../models/photo')

const cloudinary = require("../config/cloudinary");

module.exports = {
    create
}


  
async function create(req, res) {
  
      console.log(req.body, req.file)
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // Create new user
      let photo = new Photo({
        photoUrl: result.secure_url,
      });
      // save user details in mongodb
      await photo.save();
      res.redirect('/')
    } catch (err) {
      console.log(err);
    }
  }