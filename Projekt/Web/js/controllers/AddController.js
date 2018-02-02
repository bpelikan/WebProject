app.controller('AddController', ['$scope', 'addFriend', function($scope , addFriend) {
    console.log("AddController");
    
    //$scope.addFriendModel={};
   
    this.saveFriend = function(addFriendModel) {
        addFriend.saveFriend(addFriendModel).then(function(data) {
            console.log(data);
        });
        // .success(function() { 
        //     alert('saved successfully!!!'); 
        // }).error(function(){
        //     alert('something went wrong!!!');
        // });
    }
}]);