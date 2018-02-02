app.controller('ListController', ['$scope', 'friends', 'groups', function($scope, friends, groups) { 
    console.log("ListController");
    friends.then(function(data) { 
        $scope.friends = data; 
    });
    
    groups.then(function(data) { 
        $scope.groups = data; 
    });
}]);