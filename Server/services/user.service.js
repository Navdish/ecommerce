const model = require('../models');


// const fetch_users_data = function(page, count_users, filter_value, sort_value, search){
//     // console.log("search ", search);
//     if(search === "")
//     {
//         if(filter_value === "All"){
//             // console.log(sort_value);
//             return model.User.find().sort(sort_value).skip((page-1)*count_users).limit(count_users);
//         }
//         else {
//             return model.User.find({role : filter_value}).sort(sort_value).skip((page-1)*count_users).limit(count_users);
//         }
//     }
//     else {
//         if(filter_value === "All"){
//             return model.User.find({
//                 "$or":
//                 [
//                     {"name" : {$regex:search,  $options: 'i'}}
//                 ]
//             }).sort(sort_value).skip((page-1)*count_users).limit(count_users);
//         }
//         else {
//             return model.User.find({name: search, role : filter_value}).sort(sort_value).skip((page-1)*count_users).limit(count_users);
//         }
//     }
    
// }

// const fetch_user_data = function(){

// }

const find_user = function(email){
    return model.User.findOne({email: email}).exec();
}

const create_user = function(name, email, hash, role, description, address) {
    return model.User.create({name, email, password : hash, role});
} 

const add_product = function(name, images, price, quantity, colors, rating, description, retailer_id)
{
    return model.Product.create({name, images, price, quantity, colors, rating, description, retailer_id});
}


const fetch_user_by_id = function(id){
    return model.User.findById(id);
}

const update_user = function(id, name, email, role, description, address){
    return model.User.findOneAndUpdate({_id : id}, {name: name, email : email, role:role, description: description, address: address});
}

const drop = function(id) {
    // console.log(id)
    return model.User.deleteOne({_id : id});
}







module.exports = {
    // fetch_users_data,
    add_product,
    fetch_user_by_id,
    update_user,
    drop,
    create_user,
    // login,
    find_user
}