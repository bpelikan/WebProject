app.controller('AddController', ['$scope', 'addFriend', function($scope , addFriend) {
    console.log("AddController");

    this.saveFriend = function(friendToAdd) {
        addFriend.saveFriend(friendToAdd).then(function(data) {
            console.log(data);
        });
    }
}]);