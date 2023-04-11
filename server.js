//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/bio", function(req, res){
  res.send("My name is Ram Kumar, I am an aspiring Web developer, learn MERN Stack Web Development");
});

app.get("/nodemon",function(req, res){
  res.send("<ul><li>Eat</li><li>Work</li><li>Conquer</li><li>Repeat</li></ul>");
});

app.listen(3000,function(){
  console.log("The Server has been started in port 8389");
});
