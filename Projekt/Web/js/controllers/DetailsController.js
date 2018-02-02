app.controller('DetailsController', ['$scope', 'friendDetails', '$routeParams', function($scope, friendDetails, $routeParams) { 
    console.log("DetailsController");
    friendDetails.then(function(data) {
        $scope.friendDetails = data;
    });

    
}]);