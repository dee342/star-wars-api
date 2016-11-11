angular.module( 'SwapiCoAPP.services', [] )
    .factory(
        'swapicoAPIservice', function ($http, $q){

            var swapicoAPI = {};
            var characters = [{
                "name": "Luke Skywalker",
                "url": "https://swapi.co/api/people/1/"
            }, {
                "name": "Darth Vader",
                "url": "https://swapi.co/api/people/4/"
            }, {
                "name": "Obi-wan Kenobi",
                "url": "https://swapi.co/api/people/unknown/"
            }, {
                "name": "R2-D2",
                "url": "https://swapi.co/api/people/2/"
            }];

            swapicoAPI.getCharacters = function (){
                var deferred = $q.defer();

                deferred.resolve( characters );
                return deferred.promise;
            }

            swapicoAPI.getCharacterFilms = function (name){
                var url = "";
                var deferred = $q.defer();
                for (var i = 0; i < characters.length; i++) {
                    if(characters[i].name === name) {
                        url = characters[i].url;
                        break;
                    }
                }
                getFilms( url ).then(
                    function (response){
                        deferred.resolve( response.data.films );
                    }
                );
                return deferred.promise;

            };


            swapicoAPI.getFinalResult = function (films){
                var promises = films.map(
                    function (film){

                        return $http(
                            {
                                url: film,
                                method: 'GET'
                            }
                        );

                    }
                );
                return $q.all( promises );
            };
            function getFilms (url){
                var deferred = $q.defer();
                return $http(
                    {
                        method: 'GET',
                        url: url
                    }
                ).success(
                    function (data){
                        deferred.resolve( data );
                    }
                ).error(
                    function (error){
                        deferred.reject();
                    }
                );

                return deferred.promise;
            };


            return swapicoAPI;
        }
    );