const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const user = require('./Schema.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {

// });

mongoose.connect("mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/")
    .then(console.log("DB connected"))
    .catch((error) => console.log(error));

app.post('/signup', async function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  user.UserModel.find({email})&&res.redirect('/Login');
  const hash = await bcrypt.hash(password, saltRounds);
  const new_user = user.UserModel.create({email : email, password : hash, name : name});
  const token = jwt.sign({email : email, id : id}, secret, {expiresIn: "1h"});
  console.log(new_user, token);
  res.send(token);
})

app.listen(8080, function() {
  console.log("Server is running on 8080");
});

// mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/
//mongodb : username : navdishjaggi, password : XUb6oUxcy3sfJRFj