/**
 * History Components module.
 *
 * @module SampleApp.components.history
 */
(function () {
  'use strict';

  angular
    .module('SampleApp.components.history', [])
    .controller('HistoryController', HistoryController);

  HistoryController.$inject = [];

  /**
   * HistoryController
   *
   * @class HistoryController
   * @constructor
   */
  function HistoryController() {
    console.log('HistoryController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  HistoryController.prototype.activate = function() {
    console.log('HistoryController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
