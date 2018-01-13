// Import the express library here
const express = require('express');
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;
//udostepnia pliki z folderu public
//static/jsonFile/test.json
app.use('/static', express.static('public'));

//const friends = [{name: 'nazwa1'}, {name: 'nazwa2'}]
const friends = [
    {name: 'nazwa1'},
    {name: 'nazwa2'},
    {name: 'nazwa3'},
    {name: 'nazwa4'}]


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

app.get("/friends", (req, res, next) => {
    console.log('/friends');

    res.json(friends);
    //console.log(req);
})

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});