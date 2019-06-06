var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type : String,
        unique: true
    },
    password : {
        type: String,
        
    },todos : [{
        completed : {type:Boolean,default:false},
        title : {type:String,default:''}
    }]
});

var User = mongoose.model('Users',userSchema);

// save user to database (register new user)

User.addUser = function(user,callback){
    user.save((err,result)=>{
        if(err){
            console.log('user cannot be added \n error details:'+err);
            return callback('Failed to Add user, this email already has an account!',null);
        }else {
            return callback(null,'User added successfully!');

        }
    });
};

// login
User.login = function(user,callback){
    User.findOne({email:user.email},(err,user)=>{
        if(err){
            console.log('Error happened in login \n details'+err);
            callback('server error!');
        }else if (user == undefined){
            callback('user not found!');
        }else{
            if (password == user.password){
                callback(null,user.email);
                // pass data to pages or angular service
            }
            else{
                callback('incorrect info!');
            }
        }
    });
}

// delete user
User.remove = function(email,callback){
    User.findOneAndDelete({email:email},(err,result)=>{
        if(err){
            console.log('Email does not exist!,details'+err);
            callback('server error!');
        }else{
            // successful remove , here i redirect to home
            callback(null,'successfully removed user!');
        }
    });
};

// create new todo
User.addTodo = function(email,todo,callback){
    User.findOneAndUpdate({email:email},{$push:{"todos":todo}},(err,user)=>{
        if(err){
            console.log('Error happened when add new todo, details:'+err);
            callback('Server error!');
        }else{
            callback(null,'todo created successfully!'); // send data with callback
        }
    });
}

// list todos
User.listTodos = function(email,callback){
    User.findOne({email:email},(err,docs)=>{
        if(err){
            console.log('Error happened when fetching data, details:'+err);
            callback('Server error!');
        }else{
            callback(null,docs.todos); // send data with callback 
        }
    });
}

// edit todo
User.editTodo = function(todoId,todo,callback){
    User.findOneAndUpdate({_id:todoId},{$set:{todo}},(err,result)=>{
        if(err){
            console.log('Error happened when update todo, details:'+err);
            callback('Server error!');
        }else{
            callback(null,'todo updated successfully!'); // send data with callback
        }
    });
}
// delete todo
/*
User.deleteTodo = function(email,todoId,callback){
    User.findOneAndUpdate({email:email},{$pull:{_id:[todoId]}},(err,result)=>{
        if(err){
            console.log('todo does not exist!,details'+err);
            callback('server error!');
        }else{
            // successful remove , here i redirect to home
            callback(null,'successfully removed todo!');
        }
    });
}*/


module.exports = User;
