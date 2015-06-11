"use strict";

var React = require('react');

var Workshop = React.createClass({
  render: function() {
    return (
      <div className='col-sm-6 col-md-4'>
        <div className='workshop-card'>
          <div className='workshop-card__photo-container'>
            <img className='workshop-card__photo' src={'/static/images/' + this.props.photoPath}></img>
          </div>
          <div className='workshop-card__note'>
            <div className='workshop-card__note__title'>{this.props.title}</div>
            <span>{this.props.description}</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Workshop;
