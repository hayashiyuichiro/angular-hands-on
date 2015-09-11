/**
 * This is SampleApp module.
 *
 * @module SampleApp
 */
(function () {
  'use strict';

  angular
    .module('SampleApp', [
      'ngNewRouter',
      'SampleApp.config',
      'SampleApp.value',
      'SampleApp.components.itemlist',
      'SampleApp.components.item',
      'SampleApp.components.history',
      'SampleApp.components.carts',
      'SampleApp.components.user'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',         redirectTo: '/itemlist'},
    {path: '/itemlist', component: 'itemlist'},
    {path: '/item/:isbn',     component: 'item'},
    {path: '/history',  component: 'history'},
    {path: '/carts',    component: 'carts'},
    {path: '/user',     component: 'user'}
  ];

  AppController.$inject = [
    'SampleAppValue',
    '$rootScope'
  ];

  /**
   * AppController
   *
   * @class AppController
   * @main SampleApp
   * @constructor
   */
  function AppController (SampleAppValue, $rootScope) {
    this.SampleAppValue = SampleAppValue;
    this.$rootScope = $rootScope;
    vm = this;

    vm.$rootScope.$watch(cartsValue, cartsSet);
  }
  var vm;

  var cartsSet = function(value) {
    vm.carts = value;
  };

  var cartsValue = function() {
    return vm.SampleAppValue.carts;
  };
})();
