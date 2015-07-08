'use strict';

/* globals google */

var React = require('react');
var Header = require('../common/header.react.js');

var LocationPage = React.createClass({
  propTypes: {
    location: React.PropTypes.string.isRequired,
    page: React.PropTypes.number.isRequired
  },

  componentDidMount: function() {
    var { locations } = this._getData();
    var locInfo = locations[this.props.location];
    var position = new google.maps.LatLng(locInfo.lat, locInfo.lng);

    var options = {
      zoom: 15,
      center: position,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('location__map'),
                                  options);
    var marker = new google.maps.Marker({ map, position });
    var infoWindow = new google.maps.InfoWindow({
      content: locInfo.description
    });
    google.maps.event.addListener(marker, 'click',
                                  () => infoWindow.open(map, marker));
    infoWindow.open(map, marker);
    // we need to have component rendered in DOM to be able to attach the
    // map, so this is the only place where we can store it in state,
    // this causes one additional re-render
    this.setState({ map, marker, infoWindow });
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.locaction !== this.props.location;
  },

  componentDidUpdate: function() {
    var locInfo = this._getData().locations[this.props.location];
    var position = new google.maps.LatLng(locInfo.lat, locInfo.lng);
    this.state.map.panTo(position);
    this.state.marker.setPosition(position);
    this.state.infoWindow.setContent(locInfo.description);
  },

  _getData: function() {
    return JSON.parse(localStorage.getItem('pages'))[this.props.page];
  },

  render: function() {
    var { id, style, href, title, locations } = this._getData();
    var loc = (this.props.location !== '') ? this.props.location : 'waw';
    var desc = locations[loc].date + '<br />' + locations[loc].description;

    return (
       <div>
        <Header description={desc}
                href={href} id={id}
                style={style}
                title={title}/>
        <div className='location__map-container'>
          <div id="location__map">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LocationPage;
