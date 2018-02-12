app.controller('DetailsController', ['$scope', 'friendDetails', 'groups', 'deleteFriendService', '$window', '$route', '$routeParams', function($scope, friendDetails, groups, deleteFriendService, $window, $route, $routeParams) { 
    console.log("DetailsController");

    groups.showGroups().then(function(data) {
        $scope.groups = data;
    });

    friendDetails.showDetails().then(function(data) {
        $scope.friend = data;
    });

    this.deleteFriend = function() {
        deleteFriendService.deleteFriend($routeParams.friendId).then(function(data) {
            //console.log(data);
            $route.reload();
            $window.history.back();
        });
    }

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);