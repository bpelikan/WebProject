app.service('groups', ['$http', function($http) { 
    this.showGroups = function(){
        return $http({
                    method: 'GET',
                    url: 'http://localhost:4001/groups'
                }).then(function (success){
                    console.log("Get groups service");
                    return success.data;
                },function (error){
                    console.log("Error during downloading friends groups from api");
                    return error;
                });
    }
    
    
    
    // return $http({
    //             method: 'GET',
    //             url: 'http://localhost:4001/groups'
    //         }).then(function (success){
    //             console.log("Get groups service");
    //             return success.data;
    //         },function (error){
    //             console.log("Error during downloading friends groups from api");
    //             return error;
    //         });
  }]);