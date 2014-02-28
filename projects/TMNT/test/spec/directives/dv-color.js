'use strict';

describe('Directive: dvColor', function () {

  // load the directive's module
  beforeEach(module('tmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should change the color of an element', inject(function ($compile) {
    element = angular.element('<div dv-color="blue">some text</div>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.css('color')).toBe('blue');
  }));
});
