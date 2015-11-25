booksApp.controller('mainCtrl', 
  function($scope, $http, $routeParams, $filter, $timeout) {

    // Vars used in pagination
    $scope.currPage = 0;
    $scope.itemsInPage = 12;

    // Vars used in category and genre selectors
    $scope.categories = ['Find me the best','Fiction', 'Non-Fiction'];
    $scope.category = $scope.categories[0];
    $scope.genres = ['books about'];
    $scope.genre = $scope.genres[0];

    // Fetch JSON
    $http.get('data/book.json').success(function(data) {
      $scope.booklist = data;    
      
      $scope.booklist.forEach(function(entry){
        entry.published_relative = moment(entry.published).fromNow();
        entry.published = moment(entry.published).format('MMMM D, YYYY');
        $scope.genres.push(entry.genre.name);
      });

      $scope.genres = jQuery.unique($scope.genres);

      if(typeof $routeParams.bookId !== "undefined"){
        $scope.book = $filter('filter')(data, {id: $routeParams.bookId})[0];
      }
    });

    // Watch search and filters and go back to the first page whenever. This is to prevent being in a page that doesn't exist anymore after a search/filter.
    $scope.$watchGroup(['searchText', 'category', 'genre'], function() {
      $scope.currPage = 0;
    });

    // Functions for pagination
    $scope.numOfPages = function(booklist_len){
      return Math.ceil(booklist_len / $scope.itemsInPage);
    };
    $scope.pageNumbers = function(booklist_len){
      return Array.apply(null, {length: $scope.numOfPages(booklist_len)}).map(Number.call, Number);
    };
    $scope.disabled = function(direction, booklist_len){
      if(direction === 'prev'){
        if($scope.currPage == 0) return true;
      }
      else if(direction === 'next'){
        if($scope.currPage == $scope.numOfPages(booklist_len)- 1) return true;
      }
      return false;
    };

    // Function for search
    $scope.isInSearchText = function(book) {
      $scope.searchText = angular.lowercase($scope.searchText);
      return book.name.toLowerCase().search($scope.searchText) >= 0 || book.author.name.toLowerCase().search($scope.searchText) >= 0;
    };

    // Functions for category and genre selectors
    $scope.categoryFilter = function(book){
      if(book.genre.category == $scope.category) return true;
      else if($scope.category == 'Find me the best') return true;
      else return false;
    };
    $scope.genreFilter = function(book){
      if(book.genre.name == $scope.genre) return true;
      else if($scope.genre == 'books about') return true;
      else return false;
    };

});
