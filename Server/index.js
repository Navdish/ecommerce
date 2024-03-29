const express = require("express");
const bodyParser = require("body-parser");
const {Users} = require('./Schema.js');
const {Products} = require('./Schema.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors')
var jwt = require('jsonwebtoken');
// const multer = require('multer');
// const upload = multer({ dest: '../images/' })

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('./config/mongoDB');

// Routes declaration
app.use("/", require("./routes"));

// app.post('/signup', async function(req, res){

//   const user_name = req.body.name;
//   const user_email = req.body.email;
//   const user_password = req.body.password;
//   const user_role = req.body.role;
//   console.log(req.body);

//   const user = await Users.findOne({email : user_email}).exec();

//   if(user)
//   {
//     return res.status(400).json({message :'something went wrong'});
//   }
//   else 
//   {
//     const hash = await bcrypt.hash(user_password, saltRounds);
//     console.log(hash);
//     const new_user = await Users.create({email : user_email, password : hash, name : user_name, role : user_role, cart : []});
//     res.status(200);
//   }
// })

// app.post('/login', async function(req, res){
//   console.log(req.body);
//   const {email, password, role} = req.body;

//   const user = await Users.findOne({email: email}).exec();
//   console.log(user);
//   if(user)
//   {
    
//     if(bcrypt.compare(password, user.password)  && (role === user.role))
//     {
//       return res.status(200).json({user });
//     }
//   }
//   return res.status(400).json({message :'No user found with such credentials'});
  
// })

// app.post('/add_product', upload.single('avatar'), async function(req, res){
//   console.log("add_product");
//   const {name, images, price, quantity, colors, rating, description, retailer_id} = req.body;
//   const response = await Products.create({name: name, images: images, price : price, quantity: quantity, colors: colors, rating: rating, description: description, retailer_id : retailer_id})

//   console.log(response);
//   // add the product id to the admin cart
//   const admin = await Users.findById(retailer_id).exec();
//   admin.cart = [...admin.cart , response._id];
//   admin.save();
//   res.status(200);
// })

// app.post('/get_products', async function(req, res){
//   console.log("get products");
//   const admin = req.body;
//   console.log(admin); // _id of admin
//   // const posts = await Products.find({retailer_id : req}).exec();
//   // console.log(posts);

//   const posts = await Products.find({retailer_id : admin.user_id}).exec();
//   console.log(posts);
//   res.status(200).json(posts);
// })


app.listen(8080, function() {
  console.log("Server is running on 8080");
});

