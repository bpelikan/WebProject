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

friendsRouter.get("/", (req, res, next) => {
    Friend.find().exec(function(err, friends) {
        if (err) {
            res.status(500).send('Couldn\'t get friends from database');
        }
         
        res.json(friends);
    });
})

friendsRouter.get("/groups", (req, res, next) => {
    Friend.distinct('group', function(err, groups){
        if (err) {
            res.status(500).send('Couldn\'t get groups from database');
        }
        
        res.json(groups);
    });
})

friendsRouter.get("/:friendId", (req, res, next) => {
    Friend.findById(req.params.friendId, function(err, friend) {
        if (err) {
            res.status(500).send('Couldn\'t get friend with this id from database');
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
                    res.status(500).send('Friend  couldn\'t be saved in database');
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
                res.status(500).send('Friend couldn\'t be saved in database');
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
            res.status(500).send('Couldn\'t delete friend with this id from database');
        }
        res.status(204).send();
    });
})

module.exports = friendsRouter;