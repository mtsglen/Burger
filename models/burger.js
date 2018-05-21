var orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      var prettyResult;

        // for (i = 0; i < result.length; i++) {
        //     prettyResult = JSON.stringify(result[i].burger_name);
        //     console.log("This is the result: " + prettyResult);
            
        // }
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.insertOne("burgers", [
      "burger_name", "devoured"], [
        name, false
      ], cb);
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;