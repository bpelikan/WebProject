app.service('addFriend', ['$http', function($http) { 
    this.saveFriend = function(friendToAdd){
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:4001/friends',
            data: friendToAdd
        }).then(function (success){
            console.log("Add friend service");
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
}]);