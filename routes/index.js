var express = require("express");
var router = express.Router();

//calling users mongodb file
const sahilModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

//creating in mongodb
router.get("/create", async function (req, res) {
  const createduser = await sahilModel.create({
    username: "Kumar",
    name: "sahil",
    age: 25,
  });
  //Now this is asynchronous hence "ban gya" will run first and then sahil model will be created, this is wrong
  //if you want to run sahilmodel first then put "await" ifront of sahilmodel
  //now "await" is not used alone, "async" is used with it in the parent function
  res.send(createduser);
});

module.exports = router;