var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// =========================== 컨텐츠 추가 ===========================
var item_list = require('./routes/item_list');
app.use('/item_list', item_list);

var duck_list = [
	'/account',
	'/hero',
	'/item',
	'/stage',
	'/mail',
	'/mail_reservation',
	'/battle',
	'/chapter',
	'/guild',
	'/command',
	'/popup/mail_list',
	'/popup/unread_mail_list',
	'/popup/delete_mail',
	'/push',
	'/practice'

];
var duck_objects = {};

for (var cnt in duck_list) {
	duck_objects[duck_list[cnt]] = require('./routes/' + duck_list[cnt]);
	app.use(duck_list[cnt], duck_objects[duck_list[cnt]]);
}

// app.get('/:file(*)', function(req, res, next) {
// 	// console.log('res', res);
// 	var file = req.params.file;
// 	var path = __dirname + '/files/' + file;

// 	res.download(path);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
