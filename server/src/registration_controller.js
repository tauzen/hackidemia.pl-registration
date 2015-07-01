'use strict';

var crypto = require('crypto');
var winston = require('winston');
var Promise = require('promise');

var Registration = require('./registration_model');
var sendmail = require('./sendmail');
var LIMIT = require('../configuration').LIMIT;
 
module.exports.admin = function(req, res) {
  winston.info('Admin access');
  Registration.find({}).exec()
  .then(function(regs) {
    res.render('admin.jade', { registrations: regs });
  })
  .then(null, function(err) {
    winston.info('Failed to get registration list', err);
    res.send(500);
  });
};

module.exports.index = function(req, res) {
  winston.info('Registration index requested');
  res.render('index.jade');
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
      if(err.name === 'ValidationError') {
        var status = (err.errors.email &&
                      err.errors.email.message === 'unique') ? 409 : 400;
        res.sendStatus(status);
        return;
      }

      res.send(500);
      return;
    }
    
    winston.info('Registration saved in db');
    res.sendStatus(200);
    sendmail(reg);
  });
};

exports.verify = function(req, res) {
  winston.info('Registration verification ', req.params.token);
  var limitReached = false;
  
  Registration.count({ confirmed: true }).exec()
  .then(function(count) {
    winston.info('Currently confirmed ' + count);
    limitReached = count === LIMIT;
    return Registration.findOne({ token: req.params.token }).exec();
  })
  .then(function(reg) {
    if(!reg) {
      return Promise.reject();
    }

    reg.confirmed = true;
    reg.token = undefined;
    reg.waitingList = limitReached;

    return reg.save();
  })
  .then(function(reg) {
    winston.info('Registration confirmed', reg.toString());
    if(reg.waitingList) {
      res.render('waiting.jade');
    } else {
      res.render('confirmed.jade');
    }
  })
  .then(null, function(err) {
    winston.info('Registration confirmation failed, no token ' + req.params.token);
    res.render('rejected.jade');
  });
};
