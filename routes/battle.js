var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('battle', { title: 'Battle' });
});

module.exports = router;