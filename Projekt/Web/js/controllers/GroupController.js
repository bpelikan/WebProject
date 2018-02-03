app.controller('GroupController', ['$scope', 'groups', 'groupFriends', '$route', function($scope, groups, groupFriends, $route) {
    console.log("GroupController");

    groupFriends.showFriends().then(function(data) {
        //console.log(data);
        $scope.friends = data;
    });

    groups.showGroups().then(function(data) {
        //console.log(data);
        $scope.groups = data;
    });

    this.reloadData = function(){
        $route.reload()
    }
}]);