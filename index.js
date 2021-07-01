/**
 * @file /index.js
 * @project node-service
 * @author Александр
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cors = require('cors');
var join = path.join;
var fileUpload = require('express-fileupload');
var rpc = require('./modules/rpc/index');
var exists = require('./router/exists');
var upload = require('./router/upload');
var logjs = require('./modules/log');
var utils = require('./modules/utils');
var fs = require('fs');
var keygen = require('./modules/authorize/keygen');

var app = express();
var vPath = utils.getVirtualDirPath();
app.set('vPath', vPath);

// view engine setup
app.set('root', __dirname);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.use(cors());

app.use(fileUpload());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/**
 * лимит для обработки JSON установлен в 100mb
 */
app.use(express.json({
    limit: '100mb'
}));

/**
 * лимит для обработки JSON установлен в 100mb
 */
app.use(express.urlencoded({
    limit: '100mb',
    extended: true
}));

app.use(vPath + '/', express.static(join(__dirname, 'public')));

app.use(vPath + '/', express.static(join(__dirname, 'files')));

app.use(vPath, rpc('basic'));

// проверка на доступность сервера
app.use(vPath + '/exists', exists());
app.use(vPath + '/upload', upload());

app.get(vPath + '/activate', function (req, res) {
    keygen.writeKey(req.query.key);
    res.send('OK');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    var statusCode = err.status || 500;
    res.status(statusCode);
    res.render('error');
    if (req.url != '/json') {
        logjs.error('statusCode: ' + statusCode + '. URL: ' + req.url + '. Message: ' + err.message)
    }
});

/**
 * приложение express
 */
module.exports = app;