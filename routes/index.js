var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('metronic/onepage2', { title: 'Express', what: 'best', who: 'me' });
});

module.exports = router;
