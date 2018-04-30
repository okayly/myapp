var express = require('express');
var router = express.Router();

/* GET mail listing. */
router.get('/', function(req, res, next) {
	res.render('mail', { title: 'Mail' });
});

module.exports = router;