const service = require('../services');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const Products = require('../models/product')

const fetch_user = async function(req, res){
    console.log("jwt details",req.res.user);
    const jwt = req.res.user;
    return res.status(200).json({ role : jwt.role});
}

const signup = async function(req, res){

    const user_name = req.body.name;
    const user_email = req.body.email;
    const user_password = req.body.password;
    const user_role = req.body.role;
    console.log(req.body);
  
    const user = await service.userService.find_user(user_email);
  
    if(user)
    {
      return res.status(400).json({message :'something went wrong'});
    }
    else 
    {
      const hash = await bcrypt.hash(user_password, saltRounds);
      console.log(hash);
      const new_user = await service.userService.create_user(user_name, user_email, hash, user_role);
      res.status(200);
    }
}

const login = async function(req, res){
    console.log(req.body);
    const {email, password, role} = req.body;
  
    const user = await service.userService.find_user(email);
    console.log("user",user);
    if(user)
    {
      if(bcrypt.compare(password, user.password)  && (role === user.role))
      {
        const token = jwt.sign({id : user._id, role : user.role}, 'Zenmonk', {
            expiresIn: '4h'
        })
        return res.status(200).json(token);
      }
    }
    return res.status(400).json({message :'No user found with such credentials'});
}

const add_product = async function(req, res){
    console.log("add_product");
    const {name, images, price, quantity, colors, rating, description} = req.body;
    const retailer_id = req.res.user.id;
    const response = await service.userService.add_product(name, images, price, quantity, colors, rating, description, retailer_id);
    console.log(response);
    res.status(200);
}

const fetch_products = async function(req, res){
    console.log("get products");
    const admin = req.res.user.id;
    console.log(admin); 
    const posts = await Products.find({retailer_id : admin}).exec();
    console.log(posts);
    res.status(200).json(posts);
  }

module.exports = {
    fetch_user,
    signup,
    login,
    add_product,
    fetch_products
}