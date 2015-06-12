'use strict';

var crypto = require('crypto');
var winston = require('winston');
var Promise = require('promise');

var Registration = require('./registration_model');
var sendmail = require('./sendmail');
 

module.exports.index = function(req, res) {
  winston.info('Registration index requested');
  res.render('index.jade', {layout: false});
};

module.exports.create = function(req, res) {
  winston.info('Registration creation request', req.body);

  var reg = new Registration(req.body);
  reg.confirmed = false;

  var str = req.body.firstname + req.body.lastname + Date.now();
  reg.token = crypto.createHash('md5').update(str).digest('hex');

  reg.save(function(err, reg) {
    if(err) {
      winston.info(JSON.stringify(err));
      res.sendStatus(500);
      return;
    }
    
    winston.info('Registration saved in db');
    res.sendStatus(200);
    sendmail(reg);
  });
};

exports.verify = function(req, res) {
  winston.info('Registration verification ', req.params.token);
  
  Registration.findOne({ token: req.params.token }).exec()
  .then(function(reg) {
    if(!reg) {
      return Promise.reject();
    }

    reg.confirmed = true;
    reg.token = undefined;
    return reg.save();
  })
  .then(function(reg) {
    winston.info('Registration cofirmed');
    res.render('confirmed.jade', { layout: false });
  })
  .then(null, function(err) {
    winston.info('Registration confirmation failed', err);
    res.render('rejected.jade', { layout: false });
  });
};
