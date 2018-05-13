var express = require('express');
var burgers = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burger");
 });
 
 router.get("/burger", function(req, res) {
   console.log(res.body);
   burgers.all(function(burgerData) {
     var burgObject = {
       burger_data: burgerData 
      };
     res.render("index", burgObject);
   });
 });
 
 module.exports = router;