const express = require('express');
const { createElement, getIndexById } = require('../Helpers/helperFunctions');

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

const checkExistingId = (req, res, next) => {
    //console.log(`${req.method}: /friends${req.path} (checking if ID is existing)`);
    const friendIndex = getIndexById(req.params.id, friends);
    if (friendIndex !== -1) {
        req.friendIndex = friendIndex;
        next();
    }else{
        const error = new Error('Friend with this ID doesn\'t exist')
        error.status = 404;
        return next(error);
    }
}

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

friendsRouter.get("/:id", checkExistingId, (req, res, next) => {
    res.json(friends[req.friendIndex]);
})

friendsRouter.put('/:id', checkExistingId, (req, res, next) => {
    let friendUpdate = req.body;

    friendUpdate.id = req.friendIndex;
    friends[req.friendIndex] = friendUpdate;
    res.json(friends[req.friendIndex]);
})

friendsRouter.post('/', (req, res, next) => {
    const receivedFriend = createElement('friends', req.body);
    
    if (receivedFriend) {
        friends.push(receivedFriend);
        res.status(201).json(receivedFriend);
      } else {
        const error = new Error('Friend couldn\'t be saved')
        error.status = 400;
        return next(error);
      }
})

friendsRouter.delete('/:id', checkExistingId, (req, res, next) => {
    friends.splice(req.friendIndex,1);
    res.status(204).send();
})