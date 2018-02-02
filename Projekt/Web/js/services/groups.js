app.factory('groups', ['$http', function($http) { 
    return $http({
                method: 'GET',
                url: 'http://localhost:4001/friends/groups'
            }).then(function (success){
                console.log(success);
                return success.data;
            },function (error){
                console.log("Error during downloading friends groups from api");
                return error;
            });
  }]);