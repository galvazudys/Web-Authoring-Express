var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

const isProduction = process.env.NODE_ENV === 'production';
mongoose.promise = global.Promise;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(
  'mongodb://stepas:workforcers199@ds235328.mlab.com:35328/workforcers',
  { useNewUrlParser: true }
);
mongoose.set('debug', true);

require('./models/Users');

require('./config/passport');
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));
app.use(
  session({
    secret: process.env.PASSPORT_SECRET,
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

if (!isProduction) {
  app.use(errorHandler());
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
