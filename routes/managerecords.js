var express = require('express');
var router = express.Router();
recordsCtrl = require('../controllers/managerecords');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//GET /records
router.get('/', recordsCtrl.index);

//GET /records/new <-- this will need to be moved
router.get('/new', recordsCtrl.new);

//POST /records
router.post('/', recordsCtrl.create);

//DELETE /records/:id
router.delete('/:id',recordsCtrl.delete);

//GET /records/:id/edit
router.get('/:id/edit', recordsCtrl.edit) 

//PUT /records/:id
router.put('/:id', recordsCtrl.update);

//GET /records/:id
router.get('/:id',recordsCtrl.show);

module.exports = router;