const mongoose = require("mongoose");
const uri = "mongodb://localhost/mern-todo";

mongoose.connect(uri)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));

module.exports = mongoose;