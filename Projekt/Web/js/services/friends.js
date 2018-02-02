app.service('friends', ['$http', function($http) { 
    this.showFriends = function(){
        return $http({
                    method: 'GET',
                    url: 'http://localhost:4001/friends'
                }).then(function (success){
                    console.log("Get friends service");
                    return success.data;
                },function (error){
                    console.log("Error during downloading friends from api");
                    return error;
                });
    }
    
    
    // return $http({
    //             method: 'GET',
    //             url: 'http://localhost:4001/friends'
    //         }).then(function (success){
    //             console.log("Get friends service");
    //             return success.data;
    //         },function (error){
    //             console.log("Error during downloading friends from api");
    //             return error;
    //         });
  }]);