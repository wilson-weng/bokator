var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bokator Khmer Angkor Club' });
});
router.get('/mobile', function(req, res) {
    res.render('mobile/index', { title: 'Bokator Khmer Angkor Club' });
});
module.exports = router;
