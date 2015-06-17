'use strict';

var nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText;
var winston = require('winston');
var CONF = require('../configuration');

var SMTP_CONF = CONF.SMTP_TRANSPORT;
var FROM_EMAIL = CONF.FROM_EMAIL;
var CONFIRMATION_URL = CONF.CONFIRMATION_URL;

var transport = nodemailer.createTransport(SMTP_CONF);
//var stubTransport = require('nodemailer-stub-transport');
//var transport = nodemailer.createTransport(stubTransport());

transport.use('compile', htmlToText());

var createEmail = function(registration) {
  var confirmationURL = CONFIRMATION_URL + registration.token;

  var subject = 'Wakacyjny hackaton dla dzieci 11 lipca 2015, potwierdzenie udziału.';
  var html = '<p>Witamy,</p><p>Prosimy o potwierdzenie chęci udziału poprzez ' +
    'kliknięcie w poniższy link: <br /><a href="' + confirmationURL + '">' +
    confirmationURL + '</a><br /><p>Pozdrawiamy,<br />' + 
    '<a href="http://hackidemia.pl">Hackidemia.pl</a></p>';

  return {
    from: FROM_EMAIL,
    subject: subject,
    html: html,
    to: registration.email
  };
};

var sendMail = function(registration, callback) {
  var mailOptions = createEmail(registration);

  winston.info('Sending email', mailOptions);
  transport.sendMail(mailOptions, function(error, info) {
    if(error) {
      winston.info('Failed to send email', error);
      if(callback) {
        callback(error);
      }
      return;
    }

    winston.info('Email sent' + info.response);
    if(callback) {
      callback(null, info);
    }
  });
};

module.exports = sendMail;
