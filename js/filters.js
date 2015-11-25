// Filter for pagination
booksApp.filter('pagination',
  function(){
    return function(input, start){
      return input.slice(start);
    }
});