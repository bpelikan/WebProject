app.controller('ListController', ['$scope', function($scope) { 
    $scope.friends = [		
            {		
                _id: 0,		
                firstName: "Adam",		
                lastName: "Misiewicz",		
                phoneNumber: "123456789",		
                email:"amisiewicz@gmail.com",		
                street: "ul. Mleczna",		
                number: "1",		
                postalCode: "00-101",		
                city: "Warszawa",		
                group: "Rodzina"		
            },		
            {		
                _id: 1,		
                firstName: "Alicja",		
                lastName: "Gosiak",		
                phoneNumber: "234456567",		
                email:"agosiak@gmail.com",		
                street: "ul. Słoneczna",		
                number: "2",		
                postalCode: "00-201",		
                city: "Kraków",		
                group: "Praca"		
            },		
            {		
                _id: 2,		
                firstName: "Anna",		
                lastName: "Isiewicz",		
                phoneNumber: "123456789",		
                email:"aisiewicz@gmail.com",		
                street: "ul. Kolejowa",		
                number: "3",		
                postalCode: "00-301",		
                city: "Poznań",		
                group: "Inne"		
            },		
            {		
                _id: 3,		
                firstName: "Adam",		
                lastName: "Misiewicz",		
                phoneNumber: "123456789",		
                email:"amisiewicz2@gmail.com",		
                street: "ul. Stołowa",		
                number: "4",		
                postalCode: "00-401",		
                city: "Gdynia",		
                group: "Test"		
            },		
            {		
                _id: 4,		
                firstName: "Jacek",		
                lastName: "Misiewicz",		
                phoneNumber: "123456789",		
                email:"jmisiewicz@gmail.com",		
                street: "ul. Stołowa",		
                number: "5",		
                postalCode: "00-501",		
                city: "Sopot",		
                group: "Grupa1"		
            }		
        ];

    //
    $scope.clicks = 0;
    $scope.plusClicks = function(index) { 
        $scope.clicks += 1;
        console.log($scope.friends[index]);
      };    
}]);