app.controller('DeleteController', ['$scope', 'friendDetails', 'groups', 'deleteFriendService', '$window', function($scope, friendDetails, groups, deleteFriendService, $window) { 
    console.log("DeleteController");

    groups.showGroups().then(function(data) {
        //console.log(data);
        $scope.groups = data;
    });

    friendDetails.showDetails().then(function(data) {
        //console.log(data);
        $scope.friend = data;
    });

    this.deleteFriend = function() {
        deleteFriendService.deleteFriend().then(function(data) {
            //console.log(data);
        });
    }

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);