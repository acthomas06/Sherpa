'use strict';

angular.module('tmntApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			resolve: {
				teams: function(TurtleService) {
					return TurtleService.getTeams();
				}
			}
		})
		.state('teamstate', {
			url: '/team/:teamId',
			templateUrl: 'views/teamview.html',
			controller: 'TeamCtrl',
			resolve: {
				team: function (TurtleService, $stateParams) {
					return TurtleService.getTeam($stateParams.teamId);
				}
			}
		});
});
