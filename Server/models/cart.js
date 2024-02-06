const mongoose = require('mongoose');

const Cart =  mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String,
    
})

module.exports =  mongoose.model('cartmodel', Cart);