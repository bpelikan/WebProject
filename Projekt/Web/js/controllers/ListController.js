app.controller('ListController', ['$scope', 'friends', 'groups', '$route', '$templateCache' /*, '$route', '$window'*/, function($scope, friends, groups, $route, $templateCache/*, $route, $window*/) {
    console.log("ListController");
    
    friends.showFriends().then(function(data) {
        console.log(data);
        $scope.friends = data;
    });

    groups.showGroups().then(function(data) {
        console.log(data);
        $scope.groups = data;
    });

    // friends.then(function(data) { 
    //     $scope.friends = data; 
    // });
    
    // groups.then(function(data) { 
    //     $scope.groups = data; 
    // });

    this.reloadData = function(){
        $route.reload()
    }
        //$templateCache.removeAll();
        // $window.location.reload();
    // var currentPageTemplate = $route.current.templateUrl;
    // $templateCache.remove(currentPageTemplate);
    // $route.reload();
    
}]);