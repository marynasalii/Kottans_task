'use strict';

angular.module('kottansApp')
    .constant("baseURL", "http://pokeapi.co/api/v1/")

      .service('pokemonsFactory', ['$resource', 'baseURL', function($resource,baseURL) {
          
          this.getAllPokemons = function () {  
              
              return $resource(baseURL + "pokemon/?limit=:n", null, {'query': {method: 'GET'}});         
          };
          
          
          this.getSinglePokemon = function(){ 
              
              return $resource(baseURL + "pokemon/:number", null, {'query': {method: 'GET'}});
          };
          
//          this.getPokemonsByType = function()
          


      }])
