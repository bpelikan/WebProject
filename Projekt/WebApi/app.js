const express = require('express');
const bodyParser = require('body-parser');
const {friendsRouter, groupsRouter} = require('./Routers/friendsRouter');
const logger = require('morgan');
const errorHandler = require('errorhandler')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4001;
app.use('/static', express.static('public'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});


app.use(logger('dev')); 
// app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));

app.use('/friends', friendsRouter);

app.use('/groups', groupsRouter);

app.use((err, req, res, next) => {
    res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});