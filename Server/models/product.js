const mongoose = require('mongoose');

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

module.exports =  mongoose.model('productModel', Product);