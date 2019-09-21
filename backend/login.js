var express=require('express');
var app=express();
var mongoose = require('mongoose');
require('./connect.js');
require('./model.js');
var User = mongoose.model('u2');  //User is model name
mongoose.Promise = global.Promise;  //to avoid the warning，since mongoose's default,promise, has been deleted
 
 
/**
 * config the login
 */
app.get('/',function (req,res) {
    res.sendfile(__dirname + "/" + "login.html" );
})
 
/**
 * the logic of login
 */
app.get('/login',function (req,res) {
    var name=req.query.name;
    var pwd=req.query.pwd;
    User.findOne({name:name,pwd:pwd},function (error,result) {
        if (result==null)
        {
            res.sendfile(__dirname + "/" + "no.html" );
        }else
        {
            res.sendfile(__dirname + "/" + "ok.html" );
        }
    })
})
/**
 * config of registration
 */
app.get('/register.html',function (req,res) {
    res.sendfile(__dirname+"/"+"register.html");
})
/**
 * deal with the logic of registration
 */
app.get('/register',function (req,res) {
    var  name=req.query.name;
    var pwd=req.query.pwd;
    var user=new User(
        {name:name,
            pwd:pwd
        }
    )
    user.save(function (err,result) {
        if (result==null) {
            res.sendfile(__dirname + "/" + "no.html" );
        } else {
            res.sendfile(__dirname + "/" + "register_OK.html" );
        }
    });
 
})
 
/**
 * monitor the port
 * @type {http.Server}
 */
var  server=app.listen(3030,function () {
    console.log("start");
})
