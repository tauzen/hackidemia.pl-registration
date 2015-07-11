'use strict';

window.$ = require('jquery');
window.jQuery = require('jquery');

require('../../bower_components/bootstrap-modal-collapse-transition/collapse.min');
require('../../bower_components/bootstrap-modal-collapse-transition/transition.min');

window.React = React; // export for http://fb.me/react-devtools
window.Navigation = require('./mixins/navigation');
var React = require('react');
var Storage = require('./storage');

var Menu = require('./components/menu.react');
var Cover = require('./components/cover.react');
var WorkshopsPage = require('./components/page_workshops/workshops.react');
var RegistrationPage = require('./components/page_registration/registration.react');
var LocationPage = require('./components/page_location/location.react');
var Footer = require('./components/footer.react');

var App = React.createClass({
  getInitialState: function() {
    return {location: 'krk'};
  },

  handleLocationChange: function(location) {
    this.setState({ location });
  },

  render: function() {
    return (
      <div>
        <Menu/>
        <Cover/>
        <WorkshopsPage/>
        <RegistrationPage onLocationChange={this.handleLocationChange} />
        <LocationPage location={this.state.location} page={2} />
        <Footer/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  Storage.init();
  React.render(<App/>, document.getElementById("react"));

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
