var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ //define the model of data
    name: String,
    pwd: String
 
});
mongoose.model('u2', UserSchema);//use Schema as Model,first parameter as the set，if no exist, then automatically build.
