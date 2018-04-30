var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('command', { title: 'Command' });
});

module.exports = router;