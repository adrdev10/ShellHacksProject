var mongoose = require("mongoose");   //using npm require mongodb
 
var url = "mongodb://127.0.0.1:27017/nodejs";   // mongo database
var db = mongoose.connect(url);                     // link database
