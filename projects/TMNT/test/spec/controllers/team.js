'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('tmntApp'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope,
    });
  }));
  // Skipping for Testing Exercises
  // it('should attach a list of teams to the scope', function () {
  //   expect(scope.team).toBe(10);
  // });

  it('counts 33 mouse clicks', function() {
    for(var i=0; i<33; i++)
    {
      scope.mouseClicked();
    }
    expect(scope.clickCount).toBe(33);
  });

  it('determines if click count is odd', function() {
    scope.mouseClicked();
    expect(scope.isEven).toBe(false);
    expect(scope.isOdd).toBe(true);
  });

  it('determines if click count is even', function() {
    scope.mouseClicked();
    scope.mouseClicked();
    expect(scope.isEven).toBe(true);
    expect(scope.isOdd).toBe(false);
  });

  it('downloads from server on click', inject(function ($httpBackend) {
    $httpBackend.expectGET('/frogs').respond([{name: 'Kermit'}, {name: 'Frog'}, {name: 'Frogger'}, {name: 'Slippy'}]);
    scope.downloadFrogs();
    $httpBackend.flush();
    expect(scope.frogs).toEqual([{name: 'Kermit'}, {name: 'Frog'}, {name: 'Frogger'}, {name: 'Slippy'}]);
  }));
});
