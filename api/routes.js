var express = require('express');
var router = express.Router();

//importing model
var User = require('../api/model/user.model');
// register req
router.post('/register',(req,res)=>{
    let user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    // when user registers
    User.addUser(user,(err,result)=>{
        if (err){
            return res.json({success : false , message : err});
        }
        return res.json({success : true , message : result});
    });
});
// login req
router.post('/login',(req,res)=>{
    let em = req.body.email;
    let pw = req.body.password;
    user = {"email":em,"password":pw}
    User.login(user,(err,result)=>{
        if(err){
            return res.json({success : false , message : err});
        }
        console.log(result); // user data
        return res.json({success: true, message : "user Logged in successfully!"});
    });
});
// delete account
router.post('/delete',(req,res)=>{
    let em = req.body.email;
    User.remove(em,(err,result)=>{
        if(err){
            return res.json({success : false , message : err});
        }
        return res.json({success: true, message : result});
    });

});

// add todo
router.post('/newtodo',(req,res)=>{
    let em = req.body.email;
    let todo = req.body.todo;
    User.addTodo(em,todo,(err,result)=>{
        if(err){
            return res.json({success : false , message : err});
        }
        return res.json({success: true, message : result});
    });
});

// list todos
router.post('/listtodos',(req,res)=>{
    let em = req.body.email;
    User.listTodos(em,(err,result)=>{
        if(err){
            return res.json({success : false , message : err});
        }
        console.log(result);
        return res.json({success: true, message : "data fetched successfully!"});
        
    });
});

// remove todos
/*
router.post('/removetodo',(req,res)=>{
    let todoId = req.body.todoId;
    let em = req.body.email;
    User.deleteTodo(em,todoId,(err,result)=>{
        if(err){
            return res.json({success : false , message : err});
        }
        return res.json({success: true, message : result});
    });
});
*/
//update todos
router.post('/updatetodos',(req,res)=>{
    let todoId = req.body.todoId;
    let todo = req.body.todo;
    User.deleteTodo(todoId,(err,result)=>{
        if(err){
            return res.json({success : false , message : err});
        }
        return res.json({success: true, message : result});
    });
});


module.exports = router;