/**
 * Itemlist Components module.
 *
 * @module SampleApp.components.itemlist
 */
(function () {
  'use strict';

  angular
    .module('SampleApp.components.itemlist', [
      'SampleApp.service.books'
    ])
    .controller('ItemlistController', ItemlistController);

  ItemlistController.$inject = [
    'BooksService',
    'SampleAppValue'
  ];

  /**
   * ItemlistController
   *
   * @class ItemlistController
   * @constructor
   */
  function ItemlistController(BooksService, SampleAppValue) {
    console.log('ItemlistController Constructor');
    this.BooksService = BooksService;
    this.SampleAppValue = SampleAppValue;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemlistController.prototype.activate = function() {
    console.log('ItemlistController activate Method');
    vm = this;
    var books = vm.BooksService.query().$promise;
    books
      .then(setItems)
      .catch(outputLogError);
  };

  /**
   * [function description]
   * @param  {[type]} items [description]
   * @return {[type]}       [description]
   */
  var setItems = function(items) {
    vm.items = items;
  };

  /**
   * [function description]
   * @param  {[type]} ex [description]
   * @return {[type]}    [description]
   */
  var outputLogError = function(ex) {
    console.log(ex);
  };

  /**
   * [function description]
   * @param  {[type]} isbn [description]
   * @return {[type]}      [description]
   */
  ItemlistController.prototype.addCart = function(isbn) {
    vm.SampleAppValue.carts = vm.SampleAppValue.carts + 1;
  };

  /**
   * [function description]
   * @param  {[type]} isbn [description]
   * @return {[type]}      [description]
   */
  ItemlistController.prototype.removeCart = function(isbn) {
    if (vm.SampleAppValue.carts > 0) {
      vm.SampleAppValue.carts = vm.SampleAppValue.carts - 1;
    }
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
