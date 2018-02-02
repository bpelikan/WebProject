app.controller('DetailsController', ['$scope', 'friendDetails', function($scope, friendDetails) { 
    console.log("DetailsController");
    
    friendDetails.showDetails().then(function(data) {
        console.log(data);
        $scope.friend = data;
    });
}]);