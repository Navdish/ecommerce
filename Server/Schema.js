const mongoose = require('mongoose');

const User =  mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String,
    cart : [{
        type : String
    }]
})

const Product = mongoose.Schema({
    name : String,
    images : String,
    price : Number,
    quantity : Number,
    colors : String,
    rating : {
        type : Number,
        default : 3
    },
    description : String,
    retailer_id : String
})

const Users = mongoose.model('usermodel', User);
const Products = mongoose.model('productmodel', Product);

module.exports = {
    Users : Users,
    Products : Products
}
