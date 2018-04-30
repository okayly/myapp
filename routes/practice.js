var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('practice', { title: 'Practice HTML' });
});

module.exports = router;