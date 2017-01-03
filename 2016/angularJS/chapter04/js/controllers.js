var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('helloCtr', ['$scope', function($scope) {
	$scope.greet = {
		text: 'hello'
	};
}]);

bookStoreCtrls.controller('booksList', ['$scope', function($scope) {
	$scope.books = [
								 {title: 'ruby metaprograming', author: 'polo'},
								 {title: 'SQL command', author: 'davi'},
								 {title: '浪潮之巅', author: '吴军'}];
}]);