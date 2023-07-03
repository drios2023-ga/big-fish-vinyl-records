var express = require('express');
var router = express.Router();
const upload = require("../config/multer");
const photoCtrl = require('../controllers/photos');

router.post("/", upload.single("photo"), photoCtrl.create);

module.exports = router;