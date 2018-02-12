app.service('groupFriends', ['$http', '$routeParams', function($http, $routeParams) { 
    this.showFriends = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:4001/groups/' + $routeParams.groupName
        }).then(function (success){
            // console.log("Get group friends service");
            return success.data;
        },function (error){
            console.log("Error during downloading friends groups from api");
            return error;
        });
    }
}]);