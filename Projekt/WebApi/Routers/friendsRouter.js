const express = require('express');
const { createElement, getIndexById } = require('../Helpers/helperFunctions');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friendsDb', function (err) {
   if (err) {
       throw err;
    }
   console.log('Successfully connected to Mongo database');
});

var friendSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    street: String,
    number: String,
    postalCode: String,
    city: String,
    group: String,
    created: { 
        type: Date,
        default: Date.now
    }
});

var FriendData = mongoose.model('FriendData', friendSchema);
// var jamieAuthor = new FriendData ({
//     _id: new mongoose.Types.ObjectId(),
//     firstName: "Adam",
//     lastName: "Misiewicz",
//     phoneNumber: "123456789",
//     email:"amisiewicz@gmail.com",
//     street: "ul. Mleczna",
//     number: "1",
//     postalCode: "00-101",
//     city: "Warszawa",
//     group: "Rodzina"
// });


// jamieAuthor.save(function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Author successfully saved.');
// });



const friendsRouter = express.Router();
module.exports = friendsRouter;

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
];

friendsRouter.param('friendId', (req, res, next, id) => {
    const friendId = Number(id);
    const friendIndex = getIndexById(req.params.friendId, friends);
    
    if (friendIndex !== -1){
      req.friendIndex = friendIndex;
      next();
    } else {
        res.status(404).send('Friend with this ID doesn\'t exist');
    }
  })

friendsRouter.get("/", (req, res, next) => {
    res.json(friends);
})

friendsRouter.get("/groups", (req, res, next) => {
    let groupsSet = new Set();
    for(index in friends)
    {
        groupsSet.add(friends[index].group);
    }
    
    let groupsArray = [];
    groupsArray = Array.from(groupsSet)
    res.json(groupsArray);
})

friendsRouter.get("/:friendId", (req, res, next) => {
    res.json(friends[req.friendIndex]);
})

friendsRouter.put('/:friendId', (req, res, next) => {
    let friendUpdate = req.body;

    friendUpdate.id = req.friendIndex;
    friends[req.friendIndex] = friendUpdate;
    res.json(friends[req.friendIndex]);
})

friendsRouter.post('/', (req, res, next) => {
    const receivedFriend = createElement('friends', req.body);
    
    if (receivedFriend) {
        var friendToAdd = new FriendData ({
            _id: new mongoose.Types.ObjectId(),
            firstName: receivedFriend.firstName,
            lastName: receivedFriend.lastName,
            phoneNumber: receivedFriend.phoneNumber,
            email:receivedFriend.email,
            street: receivedFriend.street,
            number: receivedFriend.number,
            postalCode: receivedFriend.postalCode,
            city: receivedFriend.city,
            group: receivedFriend.group,
        });
        
        
        friendToAdd.save(function(err) {
            if (err) {
                throw err;
            }
            console.log('Author successfully saved.');
        });

        //friends.push(receivedFriend);
        res.status(201).json(receivedFriend);
      } else {
        res.status(400).send('Friend couldn\'t be saved');
      }
})

friendsRouter.delete('/:friendId', (req, res, next) => {
    friends.splice(req.friendIndex,1);
    res.status(204).send();
})