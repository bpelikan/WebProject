app.service('addFriend', ['$http', function($http) { 
    this.saveFriend = function(addFriendModel){
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'},//[{"key":"Content-Type","value":"application/json","description":"","enabled":true}]
            url: 'http://localhost:4001/friends',
            data: addFriendModel
        }).then(function (success){
            //console.log("success:");
            //console.log(success);
            return success.data;
        },function (error){
            console.log("Error during saving friends from api");
            return error;
        });
    }
    
    
  }]);