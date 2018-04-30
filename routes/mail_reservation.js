var express = require('express');
var router = express.Router();

/* GET mail_reservation listing. */
router.get('/', function(req, res, next) {
	res.render('mail_reservation', { title: 'Mail Reservation' });
});

module.exports = router;