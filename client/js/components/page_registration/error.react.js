'use strict';

var React = require('react');

var RegistrationError = React.createClass({
  render: function() {
    let msg = 'Problem po stronie serwera.';
    switch(this.props.status) {
      case 409: msg = 'Wprowadzony adres e-mail jest już zarejestrowany.'; break;
      case 400: msg = 'Nieprawidłowy formt zgłoszenia. Prosimy uzupełnić formularz zgodnie z wytycznymi.'; break;
    }

    return (
      <div className='info--centered'>
        <i className="fa fa-frown-o fa-3x"></i>
        <br></br>
        <span>Błąd rejestracji.</span>
        <br></br>
        <span> { msg } </span>
        <span> Odśwież stronę spróbuj i jeszcze raz.</span>
      </div>
    );
  }
});

module.exports = RegistrationError;
