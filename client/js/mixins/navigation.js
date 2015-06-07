"use strict";

var Navigation = {
  navigate: function(e){
    e.preventDefault();

    var target = $(e.currentTarget).data('scroll'),
        $target = $(target),
        position = $target.offset().top - 85;

     $('html,body').animate({ scrollTop: position }, 1000);
  },
};

module.exports = Navigation;
