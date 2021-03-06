'use strict';

var React = require('react');

var Cover = React.createClass({
  mixins: [Navigation],

  render: function() {
    return (
      <div className='cover__photo'>
        <div className='cover__inner'>
          <img className='cover__robot-image' src="/static/images/robot.png"></img>
          <div className='cover__main-description'>
            <span className='cover__main-description__title'>Wakacyjne warsztaty dla dzieci</span>
            {/* <span className='cover__main-city'>Warszawa 11 lipca 2015</span> */}
            <span className='cover__main-city'>Kraków 25 lipca 2015</span>
          </div>
          <button className='btn-hck' data-scroll="#zgloszenia" onClick={this.navigate}>WYŚLIJ ZGŁOSZENIE</button>
        </div>
      </div>
    );
  }
});

module.exports = Cover;
