'use strict';


 /*
 * Main module of the application.
 */

angular
  .module('kottansApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'kottansController',
        controllerAs: 'kottansController'
      })
    .when('/:n', {n:"@n"},{
        templateUrl: 'index.html',
        controller: 'kottansController',
        controllerAs: 'kottansController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
