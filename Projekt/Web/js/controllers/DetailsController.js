app.controller('DetailsController', ['$scope', 'friends', '$routeParams', function($scope, friends, $routeParams) { 
    friends.then(function(data) {
        console.log("details " + $routeParams.id) ;
        $scope.friends = data[$routeParams.id]; 
    });
}]);