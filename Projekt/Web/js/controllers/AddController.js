app.controller('AddController', ['$scope', 'addFriend', '$window', '$route', function($scope , addFriend, $window, $route) {
    console.log("AddController");

    this.saveFriend = function(friendToAdd) {
        addFriend.saveFriend(friendToAdd).then(function(data) {
            //console.log(data);
            $route.reload();
        });
    }

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);