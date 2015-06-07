"use strict";

var React = require('react');

var Menu = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <img src="./images/logo.png"></img>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#warsztaty" className="navitem__workshops">WARSZTATY</a></li>
              <li><a href="#zgloszenia" className="navitem__registration">ZGŁOSZENIA</a></li>
              <li><a href="#lokalizacja" className="navitem__location">LOKALIZACJA</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Menu;
