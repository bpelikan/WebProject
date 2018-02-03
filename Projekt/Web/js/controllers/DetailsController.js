app.controller('DetailsController', ['$scope', 'friendDetails', 'groups', function($scope, friendDetails, groups) { 
    console.log("DetailsController");

    groups.showGroups().then(function(data) {
        console.log(data);
        $scope.groups = data;
    });

    friendDetails.showDetails().then(function(data) {
        console.log(data);
        $scope.friend = data;
    });
}]);