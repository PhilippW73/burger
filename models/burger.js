// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Retrieve all burgers
  selectAllBurgers: function(cb) {
    orm.selectAllBurgers("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // Create a new burger
  createBurger: function(cols, vals, cb) {
    orm.createBurger("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Update a burger
  updateBurger: function(objColVals, condition, cb) {
    orm.updateBurger("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burger_Controller.js).
module.exports = burger;