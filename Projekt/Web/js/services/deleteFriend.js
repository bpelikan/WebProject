app.service('deleteFriendService', ['$http', '$route', '$routeParams', function($http, $route, $routeParams) { 
    this.deleteFriend = function(friendToEdit){
        return $http({
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:4001/friends/' + $routeParams.friendId,
            data: friendToEdit
        }).then(function (success){
            console.log("Delete friend service");
            console.log(success);
            $route.reload();
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
}]);