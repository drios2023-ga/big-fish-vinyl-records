var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

//storage variables
//for uploading images
const { storage } = require('./storage/storage');
const multer = require('multer');
const upload = multer({ storage });

require('dotenv').config();
require('./config/database');

var indexRouter = require('./routes/index');
var manageRecordsRouter = require('./routes/managerecords');
var manageCustomerPagesRouter = require('./routes/customerpages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/img', express.static('img'));

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/managerecords', manageRecordsRouter);
app.use('/customerpages', manageCustomerPagesRouter);


//we used upload.single to tell "multer" to upload
// only single image 
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('Done');
  });


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
