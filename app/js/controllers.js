angular.module('SwapiCoAPP.controllers', []).

  /* Characters controller */
  controller('charactersController', function($scope, swapicoAPIservice) {
    $scope.nameFilter = null;
    $scope.charactersList = [];
    $scope.searchFilter = function (character) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(character.name);
    };

    swapicoAPIservice.getCharacters().then(function (response) {
        //Digging into the response to get the relevant data
        $scope.charactersList = response;
    });
  }).



  /* Character controller */
  controller('characterController', function($scope, $routeParams, swapicoAPIservice) {
    $scope.name = $routeParams.name;
    $scope.races = [];
    $scope.filmsList = null;

    swapicoAPIservice.getCharacterFilms($scope.name).then(function (films) {
        var resultData = films;
         swapicoAPIservice.getFinalResult(resultData).then(function (response) {
          console.log(response);
          $scope.filmsList = response;
        });
    });

  });