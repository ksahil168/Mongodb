var express = require("express");
var router = express.Router();

//calling users mongodb file
//const sahilModel = require("./users");

/* GET home page. */
/* router.get("/", function (req, res) {
  res.render("index");
}); */

//creating db and user in mongodb
/* router.get("/create", async function (req, res) {
  const createduser = await sahilModel.create({
    username: "Kumar",
    name: "sahil",
    age: 25,
  }); */
//Now this is asynchronous hence "createduser" will run first and then sahil model will be created, this is wrong
//if you want to run sahilmodel first then put "await" ifront of sahilmodel
//now "await" is not used alone, "async" is used with it in the parent function
//res.send(createduser);

//finding or reading user
/* router.get("/allusers", async function (req, res) {
  let all = await sahilModel.find();
  res.send(all);
}); */

//deleting user
/* router.get("/delete", async function (req, res) {
  let deleteduser = await sahilModel.findOneAndDelete({
    username: "Kumar",
  });
  res.send(deleteduser);
});*/

//to create a cookie
router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.render("index");
});

//to see cookie data on server we have to use req
router.get("/read", function (req, res) {
  console.log(req.cookies);
  res.send("check terminal");
});

//to delete a cookie
router.get("/delete", function (req, res) {
  res.clearCookie("age");
  res.send("clear hogyi");
});

module.exports = router;
