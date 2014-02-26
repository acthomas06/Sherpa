'use strict';

angular.module('tmntApp')
  .directive('dvTable', function () {
    return {
      template: '<table><tr><th ng-repeat="header in dvTableHeaders">{{ header }}</th></tr><tr ng-repeat="row in dvTable">{{ row }}<td ng-repeat="value in row">{{ value }}</td></tr></table>',
      restrict: 'A',
      scope: {
  			dvTable: '=',
  			dvTableHeaders: '='
      	}
    };
  });
