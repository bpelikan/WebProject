app.service('deleteFriendService', ['$http' /*, '$routeParams'*/, function($http /*, $routeParams*/) { 
    this.deleteFriend = function(friendId){
        return $http({
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:4001/friends/' + friendId
        }).then(function (success){
            console.log("Delete friend service");
            //console.log(success);
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
}]);