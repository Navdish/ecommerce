const mongoose = require('mongoose');

const User =  mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String,
})

module.exports =  mongoose.model('userModel', User);