/**
 * User Components module.
 *
 * @module SampleApp.components.user
 */
(function () {
  'use strict';

  angular
    .module('SampleApp.components.user', [])
    .controller('UserController', UserController);

  UserController.$inject = [];

  /**
   * UserController
   *
   * @class UserController
   * @constructor
   */
  function UserController() {
    console.log('UserController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  UserController.prototype.activate = function() {
    console.log('UserController activate Method');
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
