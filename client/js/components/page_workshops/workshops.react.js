"use strict";

var React = require('react');
var Header = require('../common/header.react.js');
var Workshop = require('./workshop.react.js');

var WorkshopPage = React.createClass({
  render: function() {
    var pageData = JSON.parse(localStorage.getItem('pages'))[0];

    var nodes = JSON.parse(localStorage.getItem('workshops')).map(function(w){
      return(
        <Workshop key={w.id} {...w}/> 
      );
    });

    return (
      <div>
        <Header {...pageData}/>
        <div className='container container--workshops'>
          <div className='row'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WorkshopPage;
