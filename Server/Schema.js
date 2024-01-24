const mongoose = require('mongoose');

const User =  mongoose.Schema({
    name : String,
    email : String,
    password : String,
    id : String
})

const UserModel = mongoose.model('UserModel', User).exports;

// export default UserModel;