'use strict';

angular.module('kottansApp')

    .filter('capitalize', function() {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    })

    .filter('digits', function() {
        return function(input) {
            if (input < 10) { 
                input = '00' + input;
            } else if (9 < input < 100){
                input = '0' + input;
        }       
        return input;
        }
    })


  .controller('pokemonsController',['$scope', 'pokemonsFactory',
		function($scope, pokemonsFactory) {
                              
            $scope.showAllPokemons = false;
            var number=12;
            $scope.number = number;
		    pokemonsFactory.getAllPokemons().query({n:number},
                                                 
              function (response) {    
                  $scope.pokemons = response; 
                  number+=12;
                  $scope.showAllPokemons = true;
                  $scope.loadMore = function(){
                    pokemonsFactory.getAllPokemons().query({n:number},
                        function (response) { 
                            number+=12;
                            $scope.pokemons = response;
                    },
                                                           
              function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
              });
                  };
              },
                                                 
              function (response) {
                  $scope.message = "Error: " + response.status + " " + response.statusText;
              });
            
            
           
            
            $scope.choosePokemon = function(id){
                
                $scope.showPokemon = false;
                $scope.id = id;
                pokemonsFactory.getSinglePokemon().get({number:id})
                .$promise.then(
                    
                    function(response){
                        $scope.singlePokemon = response;
                        $scope.showPokemon = true;
                    },
                    
                    function(response) {
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                    }
                );       
            }
                       
                
  }]);
