app.controller('ListController', ['$scope', 'friends', function($scope, friends) { 
    friends.then(function(data) { 
        $scope.friends = data; 
    });


    $scope.clicks = 0;
    $scope.plusClicks = function(index) { 
        $scope.clicks += 1;
        console.log($scope.friends[index]);
      };    

    
}]);