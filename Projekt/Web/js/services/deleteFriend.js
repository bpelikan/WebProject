app.service('deleteFriendService', ['$http', function($http) { 
    this.deleteFriend = function(friendId){
        return $http({
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:4001/friends/' + friendId
        }).then(function (success){
            // console.log("Delete friend service");
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
}]);