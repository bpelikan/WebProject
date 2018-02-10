app.controller('GroupController', ['$scope', 'groups', 'groupFriends', 'searchFriendInGroup', '$route', '$routeParams', function($scope, groups, groupFriends, searchFriendInGroup, $route, $routeParams) {
    console.log("GroupController");
    
    $scope.idSelectedGroup = $routeParams.groupName;

    $scope.isSortingColumn = {
        name: true,
        phoneNumber: false,
        group: false
    }
    $scope.sortingByNameDescending = false;
    $scope.sortingByPhoneNumberDescending = false;
    $scope.sortingByGroupDescending = false;

    groupFriends.showFriends().then(function(data) {
        //console.log(data);
        $scope.friends = data;
        $scope.friends = $scope.friends.sort(compareByName);
    });

    groups.showGroups().then(function(data) {
        //console.log(data);
        $scope.groups = data;
    });

    this.searchFriend = function(friendToSearch) {
        console.log("searchFriend function in group");
        if(friendToSearch)
        {
            searchFriendInGroup.searchFriendInGroup(friendToSearch).then(function(data) {
                console.log('friendToSearch: ' + friendToSearch);
                // console.log(data);
                $scope.friends = data;
                $scope.friends = $scope.friends.sort(compareByName);
            });
        }
        else{
            groupFriends.showFriends().then(function(data) {
                //console.log(data);
                $scope.friends = data;
                $scope.friends = $scope.friends.sort(compareByName);
            });
        }
    };

    this.reloadData = function(){
        $route.reload()
    }

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
            $scope.sortingByPhoneNumberDescending = !$scope.sortingByPhoneNumberDescending;
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
        console.log('sorting by group...');

        if($scope.isSortingColumn.group){
            $scope.sortingByGroupDescending = !$scope.sortingByGroupDescending;
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