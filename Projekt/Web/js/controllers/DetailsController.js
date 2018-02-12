app.controller('DetailsController', ['$scope', 'friendDetails', 'groups', 'deleteFriendService', '$window', '$route', '$routeParams', function($scope, friendDetails, groups, deleteFriendService, $window, $route, $routeParams) { 
    console.log("DetailsController");

    groups.showGroups().then(function(data) {
        $scope.groups = data;
        $scope.groups = $scope.groups.sort(compareString);
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

    function compareString(a,b) {
        if (a.toUpperCase() < b.toUpperCase())
          return -1;
        if (a.toUpperCase() > b.toUpperCase())
          return 1;
        return 0;
    };  
}]);