'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tmntApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      teams: [{name: 'fakies'}, {name: 'also fake'}]
    });
  }));

  it('should attach a list of teams to the scope', function () {
    expect(scope.teams.length).toBe(2);
  });
});
