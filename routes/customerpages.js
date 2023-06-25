var express = require('express');
var router = express.Router();
pagesCtrl = require('../controllers/customerpages');

//GET /aboutus
router.get('/aboutus', pagesCtrl.showAboutUs);

router.get('/recordsoftheweek', pagesCtrl.showRecordsOfTheWeek);

router.get('/contactus', pagesCtrl.showContactUs);

router.get('/test', pagesCtrl.testPage);

module.exports = router;