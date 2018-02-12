app.service('searchFriendInGroup', ['$http', '$routeParams', function($http, $routeParams) { 
    this.searchFriendInGroup = function(friendToSearch){
        return $http({
            method: 'GET',
            url: 'http://localhost:4001/groups/' + $routeParams.groupName + '/search/' + friendToSearch
        }).then(function (success){
            // console.log("Search friends service");
            return success.data;
        },function (error){
            console.log("Error during downloading friends from api");
            return error;
        });
    }
}]);