app.controller('DetailsController', ['$scope', 'friendDetails', 'groups', 'deleteFriendService', '$window', '$route', function($scope, friendDetails, groups, deleteFriendService, $window, $route) { 
    console.log("DetailsController");

    groups.showGroups().then(function(data) {
        $scope.groups = data;
    });

    friendDetails.showDetails().then(function(data) {
        $scope.friend = data;
    });

    this.deleteFriend = function() {
        deleteFriendService.deleteFriend().then(function(data) {
            //console.log(data);
            $window.history.back();
            $route.reload();
        });
    }

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);