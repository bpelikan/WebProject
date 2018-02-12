app.controller('EditController', ['$scope', 'friendDetails', 'edit', '$route', '$window', function($scope, friendDetails, edit, $route, $window) {
    // console.log("EditController");

    friendDetails.showDetails().then(function(data) {
        $scope.friendToEdit = data;
    });
    
    this.editFriend = function(friendToEdit) {
        edit.editFriend(friendToEdit).then(function(data) {
            //console.log(data);
        });
    }

    this.back = function(){
        $window.history.back();
    }
}]);