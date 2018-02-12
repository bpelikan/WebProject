app.controller('AddController', ['$scope', 'addFriend', '$window', function($scope , addFriend, $window) {
    // console.log("AddController");

    this.saveFriend = function(friendToAdd) {
        addFriend.saveFriend(friendToAdd).then(function(data) {
            // console.log(data);
        });
    }

    this.back = function(){
        $window.history.back();
    }
}]);