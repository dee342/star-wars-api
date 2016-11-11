angular.module('SwapiCoAPP', [
  'SwapiCoAPP.services',
  'SwapiCoAPP.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/characters", 
		{templateUrl: "partials/characters.html",
		 controller: "charactersController"
		}).
	when("/characters/:name", 
		{templateUrl: "partials/character.html", 
		controller: "characterController"}).
	otherwise({redirectTo: '/characters'});
}]);