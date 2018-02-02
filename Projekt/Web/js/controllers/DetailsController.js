app.controller('DetailsController', ['$scope', 'friendDetails', function($scope, friendDetails) { 
    console.log("DetailsController");
    
    friendDetails.then(function(data) {
        $scope.friend = data;
    });
}]);