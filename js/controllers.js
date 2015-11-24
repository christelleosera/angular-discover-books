booksApp.controller('mainCtrl', 
  function($scope, $http, $routeParams, $filter) {
    $scope.currPage = 0;
    $scope.itemsInPage = 8;
    $scope.categories = ['Show All','Fiction', 'Non-Fiction'];
    $scope.category = $scope.categories[0];
    $scope.genres = ['Show All'];
    $scope.genre = $scope.genres[0];

    $http.get('data/book.json').success(function(data) {
      $scope.booklist = data;    
      
      $scope.booklist.forEach(function(entry){
        // console.log(entry.published)
        entry.published_relative = moment(entry.published).fromNow();
        entry.published = moment(entry.published).format('MMMM D, YYYY');
        $scope.genres.push(entry.genre.name);
      });

      $scope.genres = jQuery.unique($scope.genres);

      // $scope.genres = $scope.genres.reduce(function(o, v, i){
      //   o[i] = v;
      //   return o;
      // }, {});

      console.log($scope.genres)


      if(typeof $routeParams.bookId !== "undefined"){
        $scope.book = $filter('filter')(data, {id: $routeParams.bookId})[0];
      }
    });


    $scope.numOfPages = function(booklist_len){
      return Math.ceil(booklist_len / $scope.itemsInPage);
    };

    $scope.pageNumbers = function(booklist_len){
      return Array.apply(null, {length: $scope.numOfPages(booklist_len)}).map(Number.call, Number);
    }

    $scope.disabled = function(direction, booklist_len){
      if(direction === 'prev'){
        if($scope.currPage == 0) return true;
      }
      else if(direction === 'next'){
        if($scope.currPage == $scope.numOfPages(booklist_len)- 1) return true;
      }
      return false;
    };

    $scope.isInSearchText = function(book) {
      $scope.searchText = angular.lowercase($scope.searchText);
      return book.name.toLowerCase().search($scope.searchText) >= 0 || book.author.name.toLowerCase().search($scope.searchText) >= 0;
    };

    $scope.categoryFilter = function(book){
      if(book.genre.category == $scope.category) return true;
      else if($scope.category == 'Show All') return true;
      else return false;
    };

    $scope.genreFilter = function(book){
      if(book.genre.name == $scope.genre) return true;
      else if($scope.genre == 'Show All') return true;
      else return false;
    };


});
