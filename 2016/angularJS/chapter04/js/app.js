var myApp = angular.module('MyApp', ['ngRoute','bookStoreCtrls']);

myApp.config(function($routeProvider) {
	$routeProvider.when('/hello', {
		templateUrl: 'include/hello.html',
		controller: 'helloCtr'
	}).when('/list', {
		templateUrl: 'include/list.html',
		controller: 'booksList'
	}).otherwise({
		redirectTo: '/hello'
	});
});