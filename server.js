'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var winston = require('winston');

var CONF = require('./configuration');
var registration = require('./src/registration_controller.js');

var app = express();
var http = require('http').Server(app);

winston.add(winston.transports.File, { filename: CONF.SERVER_LOG });
winston.handleExceptions(new winston.transports.File({ 
  filename: CONF.ERROR_LOG
}));

mongoose.connect(CONF.MONGO_CONNECTION, function(err) {
  if(err) {
    winston.info('DB connection failed', err);
    return;
  }
  winston.info('MongoDB connection up.');
});

app.set('views', __dirname + '/views');
app.set('view_options', {layout : false});
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', registration.index);
app.post('/registration/', registration.create);
app.get('/registration/confirm/:token', registration.verify);
 
http.listen(CONF.LISTEN_PORT, function(err) {
  winston.info('Server listening', CONF.LISTEN_PORT);
  if(err) {
    winston.info('Server init failed', err);
    return;
  }
});