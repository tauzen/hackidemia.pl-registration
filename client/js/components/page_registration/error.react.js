'use strict';

var React = require('react');

var RegistrationError = React.createClass({
  render: function() {
    return (
      <div className='info--centered'>
        <i className="fa fa-frown-o fa-3x"></i>
        <br></br>
        <span>Błąd rejestracji.</span>
        <br></br>
        <span>Upewnij się, że zgłaszasz uczestnictwo po raz pierwszy i po odświeżeniu strony spróbuj jeszcze raz.</span>
      </div>
    );
  }
});

module.exports = RegistrationError;
