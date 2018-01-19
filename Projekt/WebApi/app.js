// Import the express library here
const express = require('express');
var bodyParser = require('body-parser');
const { createElement, getIndexById } = require('./Helpers/helperFunctions');
// Instantiate the app here
const app = express();
app.use(bodyParser.json());// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));// to support URL-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies

const PORT = process.env.PORT || 4001;
//udostepnia pliki z folderu public
//static/jsonFile/test.json
app.use('/static', express.static('public'));


const friends = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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

//TODO przed pobraniem sprawdzic czy istnije podane id
app.get("/friends/:id", (req, res, next) => {
    console.log('/friend/' + req.params.id);
    const friendIndex = getIndexById(req.params.id, friends);
    
    if (friendIndex !== -1) {
        res.json(friends[friendIndex]);
    } else {
        res.status(404).send();
    }
})

app.get("/friends", (req, res, next) => {
    console.log('GET /friends');

    res.json(friends);
})

app.get("/groups", (req, res, next) => {
    console.log('GET /groups');

    let groupsArray = [];
    let groupsSet = new Set();
    for(index in friends)
    {
        groupsSet.add(friends[index].group);
    }
    
    groupsArray = Array.from(groupsSet)
    res.json(groupsArray);
})


//PUT /friends/0?id=0&firstName=Jacek&lastName=Jackowiak&group=Grupa1
app.put('/friends/:id', (req, res, next) => {
    console.log('PUT /friends/' + req.params.id);
    let friendUpdate = req.body;
    const friendIndex = getIndexById(req.params.id, friends);

    if (friendIndex !== -1) {
        friendUpdate.id = friendIndex;
        friends[friendIndex] = friendUpdate;
        res.json(friends[friendIndex]);
    } else {
        res.status(404).send();
    }
})

app.post('/friends', (req, res, next) => {
    console.log('POST /friends');
    const receivedFriend = createElement('friends', req.body);
    
    if (receivedFriend) {
        friends.push(receivedFriend);
        res.status(201).json(receivedFriend);
      } else {
        res.status(400).send();
      }
})

app.delete('/friends/:id', (req, res, next) => {
    console.log('DELETE /friends/' + req.params.id);
    const friendIndex = getIndexById(req.params.id, friends);
    
    if (friendIndex !== -1) {
        friends.splice(friendIndex,1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});