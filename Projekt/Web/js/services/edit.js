app.service('edit', ['$http', '$routeParams', '$route', '$window', function($http, $routeParams, $route, $window) { 
    this.editFriend = function(friendToEdit){
        return $http({
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:4001/friends/' + $routeParams.friendId,
            data: friendToEdit
        }).then(function (success){
            console.log("Edit friend service");
            $window.history.back();
            $route.reload();
            
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
}]);