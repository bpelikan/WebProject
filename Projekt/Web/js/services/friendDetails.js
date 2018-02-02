app.service('friendDetails', ['$http', '$routeParams', function($http, $routeParams) { 
    this.showDetails = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:4001/friends/' + $routeParams.friendId
        }).then(function (success){
            console.log("Friend details service");
            //console.log(success);
            return success.data;
        },function (error){
            console.log("Error during downloading friends from api");
            return error;
        });
    }
    
    
    
    // return $http({
    //             method: 'GET',
    //             url: 'http://localhost:4001/friends/' + $routeParams.friendId
    //         }).then(function (success){
    //             console.log("Friend details service");
    //             //console.log(success);
    //             return success.data;
    //         },function (error){
    //             console.log("Error during downloading friends from api");
    //             return error;
    //         });
  }]);