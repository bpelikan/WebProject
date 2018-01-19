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

friendsRouter.get("/", (req, res, next) => {
    console.log('GET /friends');
    res.json(friends);
})

friendsRouter.get("/groups", (req, res, next) => {
    console.log('GET /friends/groups');

    let groupsSet = new Set();
    for(index in friends)
    {
        groupsSet.add(friends[index].group);
    }
    
    let groupsArray = [];
    groupsArray = Array.from(groupsSet)
    res.json(groupsArray);
})

friendsRouter.get("/:id", (req, res, next) => {
    console.log('GET /friends/:id ' + req.params.id);
    const friendIndex = getIndexById(req.params.id, friends);
    
    if (friendIndex !== -1) {
        res.json(friends[friendIndex]);
    } else {
        res.status(404).send();
    }
})

friendsRouter.put('/:id', (req, res, next) => {
    console.log('PUT /friends/:id ' + req.params.id);
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

friendsRouter.post('/', (req, res, next) => {
    console.log('POST /friends');
    const receivedFriend = createElement('friends', req.body);
    
    if (receivedFriend) {
        friends.push(receivedFriend);
        res.status(201).json(receivedFriend);
      } else {
        res.status(400).send();
      }
})

friendsRouter.delete('/:id', (req, res, next) => {
    console.log('DELETE /friends/:id ' + req.params.id);
    const friendIndex = getIndexById(req.params.id, friends);
    
    if (friendIndex !== -1) {
        friends.splice(friendIndex,1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})