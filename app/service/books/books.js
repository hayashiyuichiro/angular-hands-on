/**
 * Books Service module.
 *
 * @module SampleApp.service.books
 */
(function() {
  'use strict';

  angular
    .module('SampleApp.service.books', [
      'ngResource'
    ])
    .factory('BooksService', BooksService);

  BooksService.$inject = [
    '$resource'
  ];

  /**
   * BooksService
   *
   * @class BooksService
   * @constructor
   */
  function BooksService($resource) {
    var booksService = $resource('/api/books/:isbn', {});
    return booksService;
  }

})();
