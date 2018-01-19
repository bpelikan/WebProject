// Import the express library here
const express = require('express');
const bodyParser = require('body-parser');
const friendsRouter = require('./Routers/friendsRouter');

// Instantiate the app here
const app = express();
app.use(bodyParser.json());// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));// to support URL-encoded bodies

const PORT = process.env.PORT || 4001;
app.use('/static', express.static('public'));

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


app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path} (Request Received)`);
    next();
}); 

app.use('/friends', friendsRouter);



// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});