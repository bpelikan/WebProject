app.factory('friends', ['$http', function($http) { 
    return $http({
                method: 'GET',
                url: 'http://localhost:4001/friends'
            }).then(function (success){
                console.log(success);
                return success.data;
            },function (error){
                console.log("Error during downloading friends data from api");
                return error;
            });
  }]);