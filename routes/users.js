/* var express = require('express');
var router = express.Router();

//GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router; */

//install mongo db
// install mongoose npm i mongoose
//require and setup connection
//make schema
//create model and export


//require
const mongoose = require('mongoose');

//connect through mongoose with mongodb using local host that is default (127.0.0.1) and the database name
mongoose.connect("mongodb://127.0.0.1:27017/gomtinagar");

//make schema
const sahilschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

//create model and export
module.exports= mongoose.model("vineetkhand", sahilschema)


