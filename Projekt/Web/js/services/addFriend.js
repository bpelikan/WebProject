app.service('addFriend', ['$http', '$route', '$window', function($http, $route, $window) { 
    this.saveFriend = function(friendToAdd){
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:4001/friends',
            data: friendToAdd
        }).then(function (success){
            console.log("Add friend service");
            $route.reload();
            $window.history.back();
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
}]);