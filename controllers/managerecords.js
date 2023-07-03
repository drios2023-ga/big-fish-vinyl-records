// controllers/todos.js
const Record =  require('../models/managerecord.js');
const Photo =  require('../models/photo.js');
const cloudinary = require("../config/cloudinary");

 require('dotenv').config();

module.exports = {
     index,
     show,
     new: newRecord,
     create,
     delete: deleteRecord,
     edit,
     update
};



async function index (req, res){
    const allRecords = await Record.find();
    res.render("managerecords/",{
        records: allRecords
    });
}

async function show(req, res) {
      
    // Delete the document by its _id
    //await Book.findById({ _id: req.params.id });
    res.render('managerecords/show',{
      record:await Record.findById(req.params.id),
      title: 'Record Details'
    });
  }

async function newRecord(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    //const photos = await Photo.find({});

    res.render('managerecords/new.ejs');
  }



  async function create(req, res) {


    console.log(req.body, req.file)
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // Create new user
      // let photo = new Photo({
      //   photoUrl: result.secure_url,
      // });

      
      req.body.image = result.secure_url;
      await Record.create(req.body);
      console.log(req.body);

      // save user details in mongodb
      //await photo.save();
      res.redirect('/managerecords');
    } catch (err) {
      console.log(err);
    }

    // try {
    //   await Record.create(req.body);
    //   // Always redirect after CRUDing data

    //   res.redirect('/managerecords');
    // } catch (err) {
    //   // Typically some sort of validation error
    //   console.log(err);
    //   res.render('managerecords/new', { errorMsg: err.message });
    // }

  }  

  async function deleteRecord (req, res) {
      
    // //Delete the document by its _id
    await Record.deleteOne({ _id: req.params.id });
    // console.log(req);
    res.redirect('/managerecords');
  }

  async function update(req, res){
    id = req.params.id;
    console.log(req.body);
    await Record.findByIdAndUpdate( id, req.body, {new:true});
    //res.redirect(`/managerecords/${req.params.id}`);
    res.redirect('/managerecords');
  }
  
  async function edit(req, res){
    const record = await Record.findById({ _id: req.params.id });
    res.render('managerecords/edit', {
      title: 'Edit Record', 
      record
    });
  }
