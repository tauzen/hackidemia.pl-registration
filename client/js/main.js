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
  handleLocationChange: function(location) {
    console.log('got location change', location);
  },

  render: function() {
    return(
      <div>
        <Menu/>
        <Cover/>
        <WorkshopsPage/>
        <RegistrationPage onLocationChange={this.handleLocationChange} />
        <LocationPage/>
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


function init_map(){
    var myOptions = {zoom:15, center:new google.maps.LatLng(52.221973,21.01772600000004), mapTypeId:google.maps.MapTypeId.ROADMAP, scrollwheel:false};

    var map = new google.maps.Map(document.getElementById("location__map"), myOptions);
    var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(52.221973, 21.01772600000004)});
    var infowindow = new google.maps.InfoWindow({content:"<b>Warsztat Warszawski</b><br/>Plac Konstytucji 4<br/>00-552 Warszawa" });
    google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
  }

google.maps.event.addDomListener(window, 'load', init_map);


