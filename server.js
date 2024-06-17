// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

//1.(Server Instantiate)
const express = require("express"); //import express and its object creation
const app = express(); //initiate instance of express

const PORT = 6900;

// middleware used to parse req.body in express -> PUT or POST req
const bodyParser = require("body-parser"); //body-parser object created
// parsing json data and add it to the req.body
app.use(bodyParser.json());

//2. Activate/start a server on PORT port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Routes
app.get("/", (req, res) => {
  res.send("hello from the dark");
});

//to use post we need to use Postman to test it,
//and need to use body parser as middleware
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted Successfully");
});

// mongoose - ODM(object data modeling) that connects express and mongoDB
// Connection to LocalServer - MongoDB Compass
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/testDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Established to MongoDB"))
  .catch((error) => console.log("Received an error", error.message));

// // connection to remote server - MongoDB Atlas
// // const mongoose = require('mongoose');
// // mongoose.connect('mongodb+srv://himanshu:CvBKlSOuKl50SBaQ@cluster0.0ab3hvv.mongodb.net/?retryWrites=true&w=majority', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// // .then(() => console.log("Connection Established"))
// // .catch((error) => console.log("Received an error", error.message))
