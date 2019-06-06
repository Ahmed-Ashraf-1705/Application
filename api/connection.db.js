var mongoose = require('mongoose');
//var dbUrl = 'mongodb+srv://todoAPI:todoAPI@cluster0-hfclw.mongodb.net/todoApp';
var dbUrl = 'mongodb://localhost:27017/todoApp';
mongoose.connect(dbUrl,{useCreateIndex: true, useNewUrlParser: true });

// on successful connection
mongoose.connection.on('connected',()=>{
    console.log('Connection established!');
});

// when error happens
mongoose.connection.on('error',err=>{
    console.log('Error happened \n Details: '+err);
});