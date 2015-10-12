;(function($) {
  'use strict';

  var eCommerce = eCommerce || {};




  // Plugins
  eCommerce.plugIns = {

    init: function() {
      this.fastClick();
    },

    fastClick: function() {
      FastClick.attach(document.body);
    },
  };





  // INITS
  eCommerce.plugIns.init();
})(jQuery);