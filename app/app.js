angular.module('meeting', ['ui.bootstrap.datetimepicker','ngResource','ui.router',
                                      'meeting.controllers']);

angular.module('meeting').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/properties');

  $stateProvider.state('properties', { // state for showing all properties
    url: '/properties',
    templateUrl: 'partials/properties.html',
    resolve: {
      properties: function($resource){
        var Property = $resource("http://localhost:8888/RealEstate/api/",{}, {'query': {method: 'GET', isArray: false}});
        return Property.query().$promise; //fetch all properties. Issues a GET to /api/properties;
      }

    },
    controller: 'propertiesListController'
  });
  $stateProvider.state('foundProperties', { // state for showing all properties
    //url: '/found',
    templateUrl: 'partials/properties-found.html',

    params: ['type','start','end'],
    resolve: {

      fproperties: function($resource,$stateParams){
        var start = new Date($stateParams.start).toISOString();
        var end = new Date($stateParams.end).toISOString();
        var url = "http://localhost:8888/RealEstate/api/"+$stateParams.type+"/"+encodeURIComponent(start)+"/"+encodeURIComponent(end);
        var Property = $resource(url,{}, {'query': {method: 'GET', isArray: false}});
        console.log(url);
        return Property.query().$promise;
      }
    },
    controller: 'BookingController'
  });
  $stateProvider.state('viewProperty', { //state for showing single property
    url: '/properties/:id/view',
    templateUrl: 'partials/property-view.html',
    resolve:{

      details:function($resource, $stateParams){
        var Resource = $resource("http://localhost:8888/RealEstate/api/:id");
        return Resource.get({ id: $stateParams.id }).$promise;//Get a single property.Issues a GET to /api/properties/:id
      }

    } ,
    controller: 'propertyViewController'
   });
  $stateProvider.state('search', { //state for searching for properties
        url: '/search',
        templateUrl: 'partials/search.html',
        controller: 'formController'
  });
}).run(function ($state) {
    $state.go('properties'); //make a transition to properties state when app starts
});

