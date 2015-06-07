'use strict';

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('pages', JSON.stringify([
      {
        id: 'p_1',
        title: 'Warsztaty',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        style: 'header--workshops',
        href: 'warsztaty'
      },
      {
        id: 'p_1',
        title: 'Zgłoszenia na warsztaty',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        style: 'header--registration',
        href: 'zgloszenia'
      },
      {
        id: 'p_1',
        title: 'Lokalizacja',
        description: 'Warsztat Warszawski<br/>Plac Konstytucji 4<br/>00-552 Warszawa',
        style: 'header--location',
        href: 'lokalizacja'
      }
    ]));

    localStorage.setItem('workshops', JSON.stringify([
      {
        id: 'w_1',
        title: 'Pisz światłem',
        description: 'Rodzice wraz z dziećmi będą mogli zaprojektować opaskę na nadgarstek, do' +
                      'której zostaną przyszyte płytki Lilypad wraz z diodami LED. Każdy ' +
                      'uczestnik warsztatów będzie mógł zaprogramować wraz z ' +
                      'mentorem, jaki napis świetlny ma się pojawić w chwili poruszania ' +
                      'opaską. ',
        photoPath: 'lily_pad.png'
      },
      {
        id: 'w_2',
        title: 'Atak papierowych zombie',
        description: 'Projekt polega na stworzeniu papierowego zombie, który potrafi ' +
                      'mrugać oczami oraz wydawać dźwięki. ' +
                      'Istotą projektu jest wykorzystanie płytki Arduino Uno R3, która ' +
                      'kontroluje jego zachowanie.',
        photoPath: 'zombie.png'
      },
      {
        id: 'w_3',
        title: 'Owocowy koncert',
        description: 'Uczestnicy warsztatów będą mogli stworzyć własne instrumenty z… ' +
                      'owoców! Makey-Makey umożliwia tworzenie obwodów ' +
                      'elektronicznych z wykorzystaniem wielu materiałów, między innymi ' +
                      'wspomnianych powyżej produktów. Płytka programowana jest za ' +
                      'pomocą komputera oraz języka przyjaznego dzieciom - Scratch.',
        photoPath: 'fruits.png'
      },
      {
        id: 'w_4',
        title: 'Robot strzelający bańkami mydlanymi',
        description: 'Projekt polega na zbudowaniu robota puszczającego bańki mydlane ' +
                      'z wykorzystaniem Arduino, serwomechanizmów oraz języka ' +
                      'programowania Scratch. Z pomocą serwomechanizmów ramię ' +
                      'robota nabiera mydlin, następnie przekręca się w stronę wiatraczka, ' +
                      'dzięki któremu bańki są wydmuchiwane.' ,
        photoPath: 'bubbles.png'
      },
      {
        id: 'w_5',
        title: 'Świecące origami',
        description:  'Projekt jest fuzją starożytnej japońskiej sztuki składania papieru i ' +
                      'nowych technologii, dając w efekcie świecące origami. Dzieci wraz z ' +
                      'opiekunami będą mogły stworzyć fantazyjne figury, a następnie ' +
                      'podświetlić je za pomocą diod LED.',
        photoPath: 'origami.png'
      },
      {
        id: 'w_6',
        title: 'Stwórz własną animację',
        description: 'Za pomocą aparatu fotograficznego oraz komputera dzieci stworzą ' +
                      'animację poklatkową. Przygotują scenę, dodadzą napisy/dialogi, a ' +
                      'następnie zrobią zdjęcie. Po przygotowaniu wszystkich scen ' +
                      'animacja zostanie złożona w całość przy użyciu komputera.',
        photoPath: 'animation.png'
      }
    ]));
  }

};