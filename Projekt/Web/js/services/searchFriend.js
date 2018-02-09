app.service('searchFriends', ['$http', function($http) { 
    this.searchFriends = function(friendToSearch){
        return $http({
                    method: 'GET',
                    url: 'http://localhost:4001/friends/search/' + friendToSearch
                }).then(function (success){
                    console.log("Search friends service");
                    // console.log(success.data);
                    return success.data;
                },function (error){
                    console.log("Error during downloading friends from api");
                    return error;
                });
    }
}]);