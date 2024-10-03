"use strict";

var express = require('express');
var app = express();
app.use(express["static"]('static')); // Assuming node starts from the project's directory
app.use(express["static"]('dist'));
var appDir = process.cwd();
// appDir is the directory of this project /this app
console.log("appDir is: " + appDir); // Will display on the command window

app.get('/', function (req, res, next) {
  res.type('text/plain');
  //res.send('Hello from FinWebExpress!');    
  res.render('index.html'); // URL is: localhost:3000
});
app.listen(3000, function () {
  console.log('App started on port 3000');
});