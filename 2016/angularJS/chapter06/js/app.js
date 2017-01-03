var app = angular.module('ui-router', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('state1', {
		url: '/state1', 
		templateUrl: 'include/page1.html'
	})
	.state('state1.list', {
		url: '/list',
		templateUrl: 'include/list.html',
		controller: function($scope) {
			$scope.items = ['white', 'black', 'gray'];
		}
	})
	.state('state2', {
		url: '/state2', 
		templateUrl: 'include/page2.html'
		// template: '<h1>hello angular-ui-router</h1>'
		// controller: 'state2'
	});
});
