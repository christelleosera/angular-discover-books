var booksApp = angular.module('booksApp', ['ngRoute']);

surpApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'partials/home.html',
      controller : 'mainCtrl'

    .otherwise({
      redirectTo: '/'
    });
});