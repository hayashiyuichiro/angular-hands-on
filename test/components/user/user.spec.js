(function() {
  'use strict';

  describe('Controller: UserController', function() {

    beforeEach(module('SampleApp.components.user'));

    var UserController;

    beforeEach(inject(function($controller) {
      UserController = $controller('UserController');
    }));

    describe('UserController', function() {
      it('Test Case', function() {
        UserController.activate();
      });
    });
  });
})();
