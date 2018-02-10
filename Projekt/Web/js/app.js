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
      .when('/edit/:friendId', { 
        controller: 'EditController as ctrl', 
        templateUrl: 'views/edit.html' 
      })
      .when('/groups/:groupName', { 
        controller: 'GroupController as ctrl', 
        templateUrl: 'views/group.html'
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

 //-//npm i jquery-validation
 //-//npm install bootstrap-validator

//powrót do wcześniejszego stanu/miejsca
//walidacja danych
//sortowanie kolumn - ikony
//scrollowana tabela