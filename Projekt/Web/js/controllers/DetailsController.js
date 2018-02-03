app.controller('DetailsController', ['$scope', 'friendDetails', 'groups', '$window', function($scope, friendDetails, groups, $window) { 
    console.log("DetailsController");

    groups.showGroups().then(function(data) {
        //console.log(data);
        $scope.groups = data;
    });

    friendDetails.showDetails().then(function(data) {
        //console.log(data);
        $scope.friend = data;
    });

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);