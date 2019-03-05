var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WorkForcers' });
});

router.get('/about_product', function(req, res, next) {
  res.render('about_product', { title: 'WorkForcers' });
});

router.get('/about_team', function(req, res, next) {
  res.render('about_team', { title: 'WorkForcers' });
});

router.get('/testimonials', function(req, res, next) {
  res.render('testimonials', { title: 'WorkForcers' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'WorkForcers' });
});

router.get('/pricing', function(req, res, next) {
  res.render('index', { title: 'WorkForcers' });
});

router.get('/pricing', function(req, res, next) {
  res.render('index', { title: 'WorkForcers' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'WorkForcers' });
});

module.exports = router;
