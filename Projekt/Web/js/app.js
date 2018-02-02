var app = angular.module("friendsListApp", ["ngRoute"]);

app.config(function ($routeProvider) { 
    $routeProvider 
      .when('/', { 
        controller: 'ListController', 
        templateUrl: 'views/list.html' 
      })
      .when('/friend/:id', { 
          controller: 'DetailsController', 
          templateUrl: 'views/details.html' 
        })
      .otherwise({ 
        redirectTo: '/' 
      }); 
  });