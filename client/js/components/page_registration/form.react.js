'use strict';

var React = require('react');
var Header = require('../common/header.react.js');

var RegistrationForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    var $form = $(e.currentTarget);
    this.props.onHandleSubmit($form.attr("action"), $form.serialize());
  },

  render: function() {
    return (
         <form name='registration' action='/registration' method='post' onSubmit={this.handleSubmit}>
            <div className='row registration__section'>
              <div className='col-sm-12 registration__subtitle'>Dane uczestnika warsztatów</div>
              <div className='col-sm-6'>
                <label className='registration__label' for='child.firstname'>
                  Imię <span className='registration__info'>(pole wymagane)</span>
                </label> 
                <input className='registration__input' id='child.firstname' name='child.firstname' type='text' placeholder='Imię dziecka' required></input>
              </div>

              <div className='col-sm-6'>
                <label className='registration__label' for='child.lastname'>
                  Nazwisko <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='child.lastname' name='child.lastname' type='text' placeholder='Nazwisko dziecka' required></input>
              </div>
            </div>
            <div className='row registration__section'>
              <div className='col-sm-12 registration__subtitle'>Dane rodzica/opiekuna dziekca</div>
              <div className='col-sm-6'>
                <label className='registration__label' for='firstname'>
                  Imię <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='firstname' name='firstname' type='text' placeholder='Imię rodzica/opiekuna' required></input>
              </div>

              <div className='col-sm-6'>
                <label className='registration__label' for='lastname'>
                  Nazwisko <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='lastname' name='lastname' type='text' placeholder='Nazwisko rodzica/opiekuna' required></input>
              </div>

              <div className='col-sm-6'>
                <label className='registration__label' for='email'>
                  Adres e-mail <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='email' name='email' type='email' required></input>
              </div>
            </div>

            <div className='row registration__section'>
              <div className='col-sm-12'>
                <input type="checkbox" id='permission' className='registration__checkbox' required>Zgadzam się z Regulaminem uczestnictwa w warsztatach</input>
              </div>
            </div>

            <div className='row registration__section'>
              <div className='col-sm-12'>
                <button id='accept' className='btn-hck'>Wyślij zgłoszenie</button>
              </div>
            </div>
         </form>
    );
  }
});

module.exports = RegistrationForm;
