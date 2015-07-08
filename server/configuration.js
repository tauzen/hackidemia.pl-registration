'use strict';

module.exports = {
  MONGO_CONNECTION: 'mongodb://192.168.99.100:32772/hackidemia-reg',
  SMTP_TRANSPORT: {
    host: 'localhost',
    port: 25,
    auth: {
        user: 'username',
        pass: 'password'
    }
  },
  LISTEN_PORT: 3385,
  SERVER_LOG: 'log/server.log',
  ERROR_LOG: 'log/error.log',
  FROM_EMAIL: 'email@email.com',
  CONFIRMATION_URL: 'http://localhost:3385/registration/confirm/',
  // TODO move to db
  WORKSHOPS: {
    waw: {
      date: '11 lipca 2015',
      place: 'Warsztat Warszawski',
      placeConfirmation: 'Warsztatu Warszawskiego',
      limit: 2
    },
    krk: {
      date: '25 lipca 2015',
      place: 'hub:raum Kraków',
      limit: 2
    }
  },
  USER: 'user',
  PASS: 'pass'
};
