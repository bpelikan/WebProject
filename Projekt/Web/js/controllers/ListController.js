app.controller('ListController', ['$scope', 'friends', 'groups', '$route', function($scope, friends, groups, $route) {
    console.log("ListController");
    
    $scope.idSelectedGroup = null;
    
    $scope.isSortingColumn = {
        name: true,
        phoneNumber: false,
        group: false
    }
    $scope.sortingByNameDescending = false;
    $scope.sortingByPhoneNumber = false;
    $scope.sortingByGroup = false;

    friends.showFriends().then(function(data) {
        //console.log(data);
        $scope.friends = data;
        $scope.friends = $scope.friends.sort(compareByName);
    });

    groups.showGroups().then(function(data) {
        //console.log(data);
        $scope.groups = data;
    });

    this.sortByName = function(){
        console.log('sorting by name...');
        if($scope.isSortingColumn.name){
            $scope.sortingByNameDescending = !$scope.sortingByNameDescending;
            $scope.friends = $scope.friends.reverse();
        }
        else{
            $scope.friends = $scope.friends.sort(compareByName);
            if($scope.sortingByNameDescending)
                $scope.friends = $scope.friends.reverse();

            $scope.isSortingColumn = {
                name: true,
                phoneNumber: false,
                group: false
            }
        }        
    }

    this.sortByPhoneNumber = function(){
        console.log('sorting by phone number...');

        if($scope.isSortingColumn.phoneNumber){
            $scope.sortingByPhoneNumber = !$scope.sortingByPhoneNumber;
            $scope.friends = $scope.friends.reverse();
        }
        else{
            $scope.friends = $scope.friends.sort(compareByPhoneNumber);
            if($scope.sortingByPhoneNumber)
                $scope.friends = $scope.friends.reverse();

            $scope.isSortingColumn = {
                name: false,
                phoneNumber: true,
                group: false
            }
        }   

        

    }

    this.sortByGroup = function(){
        console.log('sorting by phone number...');

        if($scope.isSortingColumn.group){
            $scope.sortingByGroup = !$scope.sortingByGroup;
            $scope.friends = $scope.friends.reverse();
        }
        else{
            $scope.friends = $scope.friends.sort(compareByGroup);
            if($scope.sortingByGroup)
                $scope.friends = $scope.friends.reverse();

            $scope.isSortingColumn = {
                name: false,
                phoneNumber: false,
                group: true
            }
        }   
    }

    this.reloadData = function(){
        $route.reload();
    }
    
    function compareByName(a,b) {
        if(compareString(a.lastName,b.lastName))
            return compareString(a.lastName,b.lastName);
        else
            return compareString(a.firstName,b.firstName)
    }

    function compareByPhoneNumber(a,b) {
        return compareString(a.phoneNumber,b.phoneNumber)
    }

    function compareByGroup(a,b) {
        return compareString(a.group,b.group)
    }

    function compareString(a,b) {
        if (a.toUpperCase() < b.toUpperCase())
          return -1;
        if (a.toUpperCase() > b.toUpperCase())
          return 1;
        return 0;
    }
}]);




