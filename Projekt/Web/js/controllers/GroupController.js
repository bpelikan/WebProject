app.controller('GroupController', ['$scope', 'groups', 'groupFriends', '$route', '$routeParams', function($scope, groups, groupFriends, $route, $routeParams) {
    console.log("GroupController");
    
    $scope.selectedGroup = $routeParams.groupName;

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