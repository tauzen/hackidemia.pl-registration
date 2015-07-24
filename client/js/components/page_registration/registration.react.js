'use strict';

var React = require('react');
var Header = require('../common/header.react.js');
var RegistrationForm = require('./form.react.js');
var RegistrationLoading = require('./loading.react.js');
var RegistrationSuccess = require('./success.react.js');
var RegistrationError = require('./error.react.js');
var RegistrationFull = require('./full.react.js');

var RegistrationPage = React.createClass({
  getInitialState: function(){
    return {currentView: "full"};
  },

  createRegistration: function(action, data){
    this.setState({currentView: "loading"});

     $.ajax({
        type: 'POST',
        url: action,
        data: data,
        success: function() {
          this.setState({currentView: "success"})
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({currentView: "error", status: xhr.status})
        }.bind(this)
      });
  },

  handleLocationChange: function(location) {
    this.props.onLocationChange(location);
  },

  render: function() {
    var pageData = JSON.parse(localStorage.getItem('pages'))[1],
        content = null;

    switch(this.state.currentView) {
      case "form":
          content = <RegistrationForm 
                      onHandleSubmit={this.createRegistration}
                      onLocationChange={this.handleLocationChange} />
          break;
      case "loading":
          content = <RegistrationLoading/>
          break;
      case "success":
          content = <RegistrationSuccess/>
          break;
      case "error":
          content = <RegistrationError status={this.state.status}/>
          break;
      case "full":
          content = <RegistrationFull/>
          break;
      default:
          content = <RegistrationForm onHandleSubmit={this.createRegistration}/>
    }

    return (
      <div>
        <Header {...pageData}/>
          <div className='container container--registration'>
            {content}
         </div>
      </div>
    );
  }
});

module.exports = RegistrationPage;
