/**
 * value moduele
 *
 * @moduele SampleApp.value
 */
(function() {
  'use strict';

  angular
    .module('SampleApp.value', [])
    .value('SampleAppValue', {
      carts: 0
    });
})();
