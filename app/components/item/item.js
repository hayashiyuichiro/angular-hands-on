/**
 * Item Components module.
 *
 * @module SampleApp.components.item
 */
(function () {
  'use strict';

  angular
    .module('SampleApp.components.item', [
      'SampleApp.service.books'
    ])
    .controller('ItemController', ItemController);

  ItemController.$inject = [
    '$routeParams',
    'BooksService'
  ];

  /**
   * ItemController
   *
   * @class ItemController
   * @constructor
   */
  function ItemController($routeParams, BooksService) {
    console.log('ItemController Constructor');
    this.isbn = $routeParams.isbn;
    this.BooksService = BooksService;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemController.prototype.activate = function() {
    console.log('ItemController activate Method');
    vm = this;
    var books = vm.BooksService.get({isbn: this.isbn}).$promise;
    books
      .then(setItems)
      .catch(outputLogError);
  };

  /**
   * [function description]
   * @param  {[type]} items [description]
   * @return {[type]}       [description]
   */
  var setItems = function(item) {
    console.log(item);
    vm.title = item.title;
    vm.description = item.description;
    vm.author = item.author;
    vm.publisher = item.publisher;
    vm.isbn = item.isbn;
    vm.price = item.price;
    vm.image = item.image;
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
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
