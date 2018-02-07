app.controller('ListController', ['$scope', 'friends', 'groups', '$route', function($scope, friends, groups, $route) {
    console.log("ListController");

    $scope.idSelectedGroup = null;

    friends.showFriends().then(function(data) {
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