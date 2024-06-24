const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongopractice");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});


module.exports = mongoose.model("user", userSchema);
//model is created for performing CRUD op.
//here users (s is added) named model will be connected
