const express = require('express');
const { createElement } = require('../Helpers/helperFunctions');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friendsDb', function (err) {
   if (err) {
       throw err;
    }
   console.log('Successfully connected to Mongo database');
});

var friendSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: String,
    street: String,
    number: String,
    postalCode: String,
    city: String,
    group: String,
    created: { 
        type: Date,
        default: Date.now
    },
    edited: { 
        type: Date,
        default: Date.now
    }
});

var Friend = mongoose.model('Friend', friendSchema);

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
    Friend.findById(req.params.friendId, function(err, friend) {
        if (err) {
            res.status(404).send('Couldn\'t get friend with this id from database');
        }
        res.json(friend);
    });
})

friendsRouter.put('/:friendId', (req, res, next) => {
    const receivedFriend = createElement('friends', req.body);
    receivedFriend.edited = Date.now();

    if (receivedFriend) {
        Friend.findByIdAndUpdate(req.params.friendId, 
            receivedFriend, 
            function(err, friend) {
                if (err) {
                    res.status(400).send('Friend  couldn\'t be saved in database');
                }
            
                res.json(friend);
        });
      } else {
        res.status(400).send('Friend data couldn\'t be readed from request');
      }
})

friendsRouter.post('/', (req, res, next) => {
    const receivedFriend = createElement('friends', req.body);
    
    if (receivedFriend) {
        var friendToAdd = new Friend ({
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
                res.status(400).send('Friend couldn\'t be saved in database');
            }
            console.log('Author successfully saved.');
            res.status(201).json(friendToAdd);
        });
      } else {
        res.status(400).send('Friend data couldn\'t be readed from request');
      }
})

friendsRouter.delete('/:friendId', (req, res, next) => {
    Friend.remove({ _id: req.params.friendId }, function(err) {
        if (err) {
            res.status(404).send('Couldn\'t delete friend with this id from database');
        }
        res.status(204).send();
    });
    
    // friends.splice(req.friendIndex,1);
    // res.status(204).send();
})