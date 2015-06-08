'use strict';

var React = require('react');

var RegistrationLoading = React.createClass({
  render: function() {
    return (
      <div className='info--centered'>
        <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>
      </div>
    );
  }
});

module.exports = RegistrationLoading;
