var express = require('express');
var router = express.Router();
const upload = require("../config/multer");
recordsCtrl = require('../controllers/managerecords');



// //GET /records
 router.get('/', recordsCtrl.index);


 //router.get('/uploadimage', recordsCtrl.uploadImage);

 //router.post('/uploadimage', recordsCtrl.saveImage);

//GET /upload
//router.get('/:id/upload', recordsCtrl.uploadImage);

//GET /records/new <-- this will need to be moved
 router.get('/new', recordsCtrl.new);

// //POST /records
 //router.post('/', recordsCtrl.create);
 router.post('/', upload.single("photo"), recordsCtrl.create);

// //DELETE /records/:id
  router.delete('/:id',recordsCtrl.delete);

// //GET /records/:id/edit
  router.get('/:id/edit', recordsCtrl.edit); 

// //PUT /records/:id
  router.put('/:id', recordsCtrl.update);

// //GET /records/:id
  router.get('/:id',recordsCtrl.show);



module.exports = router;