var express = require('express');
var router = express.Router();

sequelize = require('sequelize');
// db = new sequelize('mKUF_JW', 'pocatcom', 'P@ssw0rd'
//     , { 
//     	host:'192.168.0.29'
//     	, port:'3306'
//     	, logging:false
//     	, dialect:'mysql'
//     	, pool:{ max:10, min:0, idle:1000 }
//     }
// );

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'mKUF Web' });
});

module.exports = router;
