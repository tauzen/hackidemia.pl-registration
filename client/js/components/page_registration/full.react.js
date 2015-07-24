'use strict';

var React = require('react');

var RegistrationFull = React.createClass({
  render: function() {
    return (
      <div className='info--centered'>
        <img className='info__robot-image' src='/static/images/logo_robot_hackidemia.png'></img>
        <p>Limit miejsc został osiągnięty.</p>
        <p>Wkrótce ogłosimy termin kolejnych warsztatów. Po aktualne informacje zapraszmy na nasz <a href='https://www.facebook.com/hackidemiaPolska'>profil</a>.</p>
      </div>
    );
  }
});

module.exports = RegistrationFull;
