const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://navdishjaggi:XUb6oUxcy3sfJRFj@cluster0.ezcelwk.mongodb.net/")
    .then(console.log("DB connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;