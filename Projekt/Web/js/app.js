var app = angular.module("friendsListApp", ["ngRoute"]);

app.config(function ($routeProvider) { 
    $routeProvider 
      .when('/', { 
        controller: 'ListController', 
        templateUrl: 'views/list.html' 
      })
      .when('/friends/:friendId', { 
          controller: 'DetailsController', 
          templateUrl: 'views/details.html' 
        })
      .when('/Add', { 
        controller: 'AddController', 
        templateUrl: 'views/add.html' 
      })
      .otherwise({ 
        redirectTo: '/' 
      }); 
  });

 //http-server web