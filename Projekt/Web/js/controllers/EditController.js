app.controller('EditController', ['$scope', 'friendDetails', 'edit', '$routeParams', '$window', function($scope, friendDetails, edit, $routeParams, $window) {
    console.log("EditController");

    friendDetails.showDetails().then(function(data) {
        //console.log(data);
        $scope.friendToEdit = data;
    });
    
    this.editFriend = function(friendToEdit) {
        edit.editFriend(friendToEdit).then(function(data) {
            //console.log(data);
        });
    }

    this.back = function(){
        console.log("back");
        $window.history.back();
    }
}]);