'use strict';

var React = require('react');

var RegistrationSuccess = React.createClass({
  render: function() {
    return (
      <div className='info--centered'>
        <img className='info__robot-image' src="/static/images/logo_robot_hackidemia.png"></img>
        <br></br>
        <span>Rejestracja została zapisana w systemie.</span>
        <br></br>
        <span>Potwierdzenia uczestnictwa można dokonać za pomocą linka przesłanego na podany adres e-mail.</span>
      </div>
    );
  }
});

module.exports = RegistrationSuccess;
