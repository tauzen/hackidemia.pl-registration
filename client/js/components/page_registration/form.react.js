'use strict';

var React = require('react');
var Header = require('../common/header.react.js');

var RegistrationForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    var $form = $(e.currentTarget);
    this.props.onHandleSubmit($form.attr("action"), $form.serialize());
  },

  handleLocationChange: function(e) {
    this.props.onLocationChange(e.target.value);
  },

  render: function() {
    return (
         <form name='registration' action='/registration' method='post' onSubmit={this.handleSubmit}>
            {/*<div className='row registration__section'>
              <div className='col-sm-12 registration__subtitle'>Lokalizacja warsztatów</div>
              <div className='col-sm-8'>
                <label className='registration__label' for='location'>
                  Miejsce i data <span className='registration__info'>(pole wymagane)</span>
                </label>
                <select name='location' className='form-control registration__select' required onChange={this.handleLocationChange}>
                  <option selected disabled hidden value=''>Proszę wybrać lokalizację i datę</option> 
                  <option value='waw'>Warszawa, 11 lipiec 2015</option>
                  <option value='krk'>Kraków, 25 lipiec 2015</option>
                </select>
              </div>
             </div>*/}
            <input name='location' type='hidden' value='krk' />
            <div className='row registration__section'>
              <div className='col-sm-12 registration__subtitle'>Dane uczestnika warsztatów</div>
              <div className='col-sm-4'>
                <label className='registration__label' for='child.firstname'>
                  Imię <span className='registration__info'>(pole wymagane)</span>
                </label> 
                <input className='registration__input' id='child.firstname' name='child.firstname' type='text' placeholder='Imię dziecka' required pattern='[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,50}' title="A - Z, a - z, min 3, max 50"></input>
              </div>
              <div className='col-sm-4'>
                <label className='registration__label' for='child.lastname'>
                  Nazwisko <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='child.lastname' name='child.lastname' type='text' placeholder='Nazwisko dziecka' required pattern='[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,50}' title="A - Z, a - z, min 3, max 50"></input>
              </div>
              <div className='col-sm-2'>
                <label className='registration__label' for='child.age'>
                  Wiek
                </label>
                <input className='registration__input col-sm-2' id='child.age' name='child.age' type='number' placeholder='6 - 12 lat' min='6' max='12'></input>
              </div>
              <div className='col-sm-8'>
                <label className='registration__label' for='child.info'>
                  Informacje dodatkowe
                </label>
                <textarea maxLength='255' className='registration__textarea' id='child.info' name='child.info' placeholder='Dodatkowe uwagi dla organizatorów'></textarea>
              </div>
            </div>

            <div className='row registration__section'>
              <div className='col-sm-12 registration__subtitle'>Dane rodzica/opiekuna dziekca</div>
              <div className='col-sm-4'>
                <label className='registration__label' for='firstname'>
                  Imię <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='firstname' name='firstname' type='text' placeholder='Imię rodzica/opiekuna' required pattern='[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,50}' title="A - Z, a - z, min 3, max 50"></input>
              </div>

              <div className='col-sm-4'>
                <label className='registration__label' for='lastname'>
                  Nazwisko <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='lastname' name='lastname' type='text' placeholder='Nazwisko rodzica/opiekuna' required pattern='[a-zA-żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,50}' title="A - Z, a - z, min 3, max 50"></input>
              </div>

              <div className='col-sm-4'>
                <label className='registration__label' for='email'>
                  Adres e-mail <span className='registration__info'>(pole wymagane)</span>
                </label>
                <input className='registration__input' id='email' name='email' type='email' required></input>
              </div>
            </div>

            <div className='row registration__section'>
              <div className='col-sm-12'>
                <input type='checkbox' id='permission' className='registration__checkbox' required>
                  Zgadzam się z <a href='/static/Regulamin_letniego_hackathonu_2015.pdf' target='_blank'>Regulaminem uczestnictwa w warsztatach</a>
                </input>
              </div>
            </div>
            <div className='row registration__section'>
              <div className='col-sm-12'>
                <input type='checkbox' id='permission-data' className='registration__checkbox' required>
                  Wyrażam zgodę na przetwarzanie danych osobowych przez Organizatora w celach informacyjnych i marketingowych zgodnie z ustawą z dnia 29 Sierpnia 1997 roku o ochronie danych osobowych Dz. U. Nr 101 poz. 926.
                </input>
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
