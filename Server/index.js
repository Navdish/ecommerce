const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {

// });

mongoose.connect("mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/")
    .then(console.log("DB connected"))
    .catch((error) => console.log(error));

app.listen(3000, function() {
  console.log("Server is running on 3000");
});

// mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/
//mongodb : username : navdishjaggi, password : XUb6oUxcy3sfJRFj