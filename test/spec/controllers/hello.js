'use strict';

describe('Controller: HelloCtrl', function () {

  // load the controller's module
  beforeEach(module('helloWorldApp'));

  var HelloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloCtrl = $controller('HelloCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeName).toBe('Mayte');
  });
});
