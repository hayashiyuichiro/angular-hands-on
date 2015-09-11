(function() {
  'use strict';

  angular
    .module('SampleApp.mock.service.books', [])
    .factory('BooksService', BooksService);

  function BooksService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();
