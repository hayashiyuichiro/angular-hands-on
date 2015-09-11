(function() {
  'use strict';

  describe('Controller: ItemlistController', function() {

    beforeEach(module('SampleApp.components.itemlist'));

    var ItemlistController;

    beforeEach(inject(function($controller) {
      ItemlistController = $controller('ItemlistController');
    }));

    describe('ItemlistController', function() {
      it('Test Case', function() {
        ItemlistController.activate();
      });
    });
  });
})();
