"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div className='divider'></div>
        <div className={'header ' + this.props.style} id={this.props.href}> 
          <div className='header_inner'>
            <div className='header__title'>{this.props.title}</div>
            <span dangerouslySetInnerHTML={{__html: this.props.description}}></span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
