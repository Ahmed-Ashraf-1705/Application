//imports
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

// db connection
var db = require('./connection.db');


// router
var router = require('./routes');

// middleware to read json
app.use(bodyParser.json());
app.use('/',router);

var server = http.createServer(app);

// initializing api server
server.listen(port,()=>{
    console.log('Server is starting at port'+port);
});





