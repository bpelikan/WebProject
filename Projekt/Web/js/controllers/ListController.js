app.controller('ListController', ['$scope', 'friends', 'groups', function($scope, friends, groups) { 
    friends.then(function(data) { 
        $scope.friends = data; 
    });

    groups.then(function(data) { 
        $scope.groups = data; 
    });
}]);