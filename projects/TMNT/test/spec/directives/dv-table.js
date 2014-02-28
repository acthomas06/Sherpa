'use strict';

describe('Directive: dvTable', function () {

  // load the directive's module
  beforeEach(module('tmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = [{id: 1, name: 'Spike'}, {id: 2, name: "Nelly"}];
    scope.headers = ['id', 'name'];

    element = angular.element('<div dv-table="data" dv-table-headers="headers"></div>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render table headers', inject(function ($compile) {
    var headers = element.find('thead').eq(0).find('th');

    console.log('headers', headers);

    expect(headers.eq(0).text()).toBe('id');
    expect(headers.eq(1).text()).toBe('name');
  }));

  it('should render table rows', inject(function ($compile) {
    var rows = element.find('tbody').eq(0).find('tr');

    console.log('rows', rows);

    expect(rows.eq(0).find('td').eq(0).text()).toBe('1');
    expect(rows.eq(0).find('td').eq(1).text()).toBe('Spike');

    expect(rows.eq(1).find('td').eq(0).text()).toBe('2');
    expect(rows.eq(1).find('td').eq(1).text()).toBe('Nelly');
  }));
});