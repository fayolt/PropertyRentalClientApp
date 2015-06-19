/*angular.module('meeting.services', []).factory('Rent', function($resource) {
  return $resource('http://localhost:8888/RealEstate/api/book',{},{
    book: {method : "POST",headers: {'Content-Type': 'application/json'}}
  });
});factory('Property',function($resource) {
  return $resource('http://localhost:8888/RealEstate/api/:type/:startt/:endd',{}, {'query': {method: 'GET', isArray: false}});
});
*/
/*app.factory('pService', function($http) {
  var promise;
  var pService = {
    async: function(url) {
      if ( !promise ) {
        // $http returns a promise, which has a then function, which also returns a promise

        promise = $http.get(url).then(function (response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return pService;
});*/