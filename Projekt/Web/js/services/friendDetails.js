app.factory('friendDetails', ['$http', '$routeParams', function($http, $routeParams) { 
    return $http({
                method: 'GET',
                url: 'http://localhost:4001/friends/' + $routeParams.friendId
            }).then(function (success){
                //console.log(success);
                return success.data;
            },function (error){
                console.log("Error during downloading friends from api");
                return error;
            });
  }]);