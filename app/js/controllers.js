angular.module('meeting.controllers', []).controller('propertiesListController', function(properties, $scope) {

  $scope.properties = properties;
  console.log($scope.properties);

}).controller('formController', function($scope,$state){
  $scope.findProperties = function() {

    $state.go('foundProperties',{ 'type':$scope.detail.type, 'start':$scope.detail.from, 'end':$scope.detail.to });

  };
}).controller('propertyViewController', function(details, $scope) {

    $scope.details = details;

}).controller('BookingController', function($http, fproperties, $scope, $state, $stateParams) {

  $scope.fproperties = fproperties;
  console.log(fproperties);
  $scope.addBooking = function(id) { //create a new booking. Issues a POST to /api/booking
    console.log('inside addBooking function');
    console.log(id);

    var d1 = new Date($stateParams.start);
    var d2 = new Date($stateParams.end);

    var dataObj = new Object();
    dataObj.propId = id;
    dataObj.startt = d1;
    dataObj.endd = d2;
    console.log(dataObj);

    $http.post('http://localhost:8888/RealEstate/api/booking',dataObj).then(function (response) {
      console.log(response);
      alert("booking succeeded");
      $state.go('properties');
    })
  };

});