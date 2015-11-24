var booksApp = angular.module('booksApp', ['ngRoute']);

booksApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'partials/books_index.html',
      controller : 'mainCtrl'
    })
    .when('/book/:bookId',{
      templateUrl: 'partials/book_detail.html',
      controller : 'mainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});