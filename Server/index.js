const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const users = require('./Schema.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors')
var jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/")
    .then(console.log("DB connected"))
    .catch((error) => console.log(error));



app.post('/signup', async function(req, res){

  const user_name = req.body.name;
  const user_email = req.body.email;
  const user_password = req.body.password;

  const user = await users.findOne({email : user_email}).exec();

  if(user)
  {
    return res.status(400).json({message :'something went wrong'});
  }
  else 
  {
    const hash = await bcrypt.hash(user_password, saltRounds);
    const new_user = await users.create({email : user_email, password : hash, name : user_name});
    res.status(200);
  }
})

app.post('/login', async function(req, res){

  const {email, password} = req.body;

  const user = await users.findOne({email: email}).exec();
  console.log(user);
  if(user)
  {
    
    if(bcrypt.compare(password, user.password))
    {
      console.log(user);
      console.log("chala ja bhai")
      return res.status(200).json({user });;
    }
  }
  return res.status(400).json({message :'No user found with such credentials'});
  
})

app.listen(8080, function() {
  console.log("Server is running on 8080");
});

// mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/
//mongodb : username : navdishjaggi, password : XUb6oUxcy3sfJRFj