var express = require('express');
var burgers = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burger");
 });
 
 router.get("/burger", function(req, res) {
  //  console.log(res.body);
   burgers.all(function(burgerData) {
     var templateData = {
       burgerData: burgerData 
      };

      // var burgArr = burgObject.burger_data;
      // console.log(burgArr);
      
     res.render("index", templateData);
   });
 });

 router.post('/burger/create', function(req, res) {
   console.log("post working");
  //  console.log(req.body);
   burgers.create(req.body.burger_name, function(result) {
     console.log('Post results = ' + result);
     res.redirect('/burger');
   });
 });

 router.put('/burger/update/:id', function(req, res) {
   console.log("I am working");
   burgers.update({devoured: true}, "id = " + req.params.id, function(result){
     res.status(200).end();
     console.log("yay");
   });
 });

 module.exports = router;