var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('stage', { title: 'Stage' });
});

module.exports = router;