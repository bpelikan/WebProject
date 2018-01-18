// Import the express library here
const express = require('express');
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;
//udostepnia pliki z folderu public
//static/jsonFile/test.json
app.use('/static', express.static('public'));

const friends = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        firstName: "Adam",
        lastName: "Misiewicz",
        phoneNumber: "123456789",
        email:"test@gmail.com",
        street: "ul. Stołowa",
        number: "4",
        postalCode: "00-401",
        city: "Gdynia",
        group: "Test"
    }
]


// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    // Pass to next layer of middleware
    next();
});

app.get("/friend/:id", (req, res, next) => {
    console.log('/friend/' + req.params.id);
    
    res.json(friends[req.params.id-1]);
})

app.get("/friends", (req, res, next) => {
    console.log('/friends');

    res.json(friends);
})

app.get("/groups", (req, res, next) => {
    console.log('/groups');

    var groupsArray = [];
    var mySet = new Set();
    for(index in friends)
    {
        mySet.add(friends[index].group);
    }
    
    groupsArray = Array.from(mySet)
    res.json(groupsArray);
})


// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});