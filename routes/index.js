var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WorkForcers' });
});

router.get('/about_product', function(req, res, next) {
  res.render('about_product', { title: 'WorkForcers' });
});

router.get('/testimonials', function(req, res, next) {
  res.render('testimonials', { title: 'WorkForcers' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'WorkForcers' });
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing', { title: 'WorkForcers' });
});

router.get('/pricing', function(req, res, next) {
  res.render('index', { title: 'WorkForcers' });
});

router.get('/try_for_free', function(req, res, next) {
  res.render('try_for_free', { title: 'WorkForcers' });
});
router.get('/login', function(req, res, next) {
  console.log(req.headers);
  if (!req.cookies.token) {
    res.render('login', { title: 'WorkForcers' });
  } else {
    res.redirect('/');
  }
});
router.get('*', function(req, res, next) {
  res.render('index', { title: 'WorkForcers' });
});

module.exports = router;
