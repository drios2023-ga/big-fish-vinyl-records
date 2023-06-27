// controllers/todos.js
const Record =  require('../models/managerecord.js');

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

const { storage } = require('../storage/storage');
const multer = require('multer');
const upload = multer({ storage });

module.exports = {
     index,
     show,
     new: newRecord,
     create,
     delete: deleteRecord,
     edit,
     update, 
    uploadImage,
    saveImage
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
      record:await Record.findById({ _id: req.params.id }),
      title: 'Record Details'
    });
  }

function newRecord(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('managerecords/new.ejs', { errorMsg: '' });
  }



  async function create(req, res) {

    try {
      await Record.create(req.body);
      // Always redirect after CRUDing data

      res.redirect('/managerecords');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('managerecords/new', { errorMsg: err.message });
    }

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

  async function uploadImage(req, res) {

    // const record = await Record.findById({ _id: req.params.id });
    // res.render('managerecords/upload', {
    //   title: 'Edit Record', 
    //   record

  //});

  res.render('managerecords/uploadimage.ejs', { errorMsg: '' });

}

async function saveImage(req, res){

// app.post('/upload', upload.single('image'), (req, res) => {
//     console.log(req.file);
//     res.send('Done');
//   });

console.log('tried to save image 1');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// app.get('', (req, res) => {
//   res.render("home");
// });

// code goes here
 const x = await app.post('/managerecords/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  console.log('tried to save image 2');
  res.send('Done');
});

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

res.redirect('/managerecords');

}



  