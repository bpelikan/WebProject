var app = angular.module("friendsListApp", ["ngRoute"]);

app.config(function ($routeProvider) { 
    $routeProvider 
      .when('/', { 
        controller: 'ListController as ctrl', 
        templateUrl: 'views/list.html'
      })
      .when('/friends/:friendId', { 
          controller: 'DetailsController as ctrl', 
          templateUrl: 'views/details.html' 
        })
      .when('/Add', { 
        controller: 'AddController as ctrl', 
        templateUrl: 'views/add.html' 
      })
      .otherwise({ 
        redirectTo: '/' 
      }); 
  });
 //http-server web