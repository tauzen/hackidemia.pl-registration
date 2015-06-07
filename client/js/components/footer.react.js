"use strict";

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className='footer'> 
        <div className='footer__inner'>
          Hackidemia is licensed under a <a href="http://creativecommons.org/licenses/by-nc/3.0/deed.en_US">Creative Commons Attribution-NonCommercial 3.0 Unported License</a>
            
            <div className='footer__contact'>
              <div className='circle'>
                <a href="https://twitter.com/HacKidemia" target="_blank" className="twitter">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
              </div>
              <div className='circle'>
                <a href="https://www.facebook.com/Hackidemia" target="_blank" className="facebook">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
              </div>
              <div className='circle'>
                <a href="mailto:info@hackidemia.pl" target="_blank" className="mail">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
             </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
