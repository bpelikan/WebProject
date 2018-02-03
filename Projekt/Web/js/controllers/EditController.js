app.controller('EditController', ['$scope', 'friendDetails', 'edit', '$window', '$route', function($scope, friendDetails, edit, $window, $route) {
    console.log("EditController");

    friendDetails.showDetails().then(function(data) {
        //console.log(data);
        $scope.friendToEdit = data;
    });
    
    this.editFriend = function(friendToEdit) {
        edit.editFriend(friendToEdit).then(function(data) {
            //console.log(data);
            $route.reload();
        });
    }

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);