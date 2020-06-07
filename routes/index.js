var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('article', { title: 'Express',path:'/' });
});
router.get('/detail', function(req, res, next) {
  res.render("detail",{'path':'/users'});
});

module.exports = router;
