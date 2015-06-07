"use strict";

var React = require('react');
var Header = require('../common/header.react.js');

var LocationPage = React.createClass({
  render: function() {
    var pageData = JSON.parse(localStorage.getItem('pages'))[2];

    return (
       <div>
        <Header {...pageData}/> 
        
        <div className='location__map-container'>
          <div id="location__map">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LocationPage;
