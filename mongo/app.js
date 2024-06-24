const express = require("express");
const app = express();
const port = 3000;

const userModel = require("./usermodal");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/create", (req, res) => {
//   //this is async code(all mongoose code), will be executed after the run of
//   //sync code and when the stack is available
//   userModel.create({
//     name: "aayush",
//     username: "aayush",
//     email: "aayush@gmail.com",
//   });
//   console.log("hey"); //sync
// });

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    //now this will run first here
    name: "aayush",
    username: "aayush",
    email: "aayush@gmail.com",
  });

  res.send(createdUser);
});

app.get("/read", async (req, res) => {
    //find()- to read all, find returns array
    //find({username:"aayush"})- to read sepecific
    let users = await userModel.find();
    res.send(users);
  });

app.get("/update", async (req, res) => {
  // userModel.findOneAndUpdate(findOne,update,{new:true})
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "aayush" },
    { name: "Aayush Bharti" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ username: "aayush" });
  res.send(deletedUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
