var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Retrieve all burgers
router.get("/", function(req, res) {
  burger.selectAllBurgers(function(data) {
    console.log("Burger DATA!!!!")
    console.log(data);
    var hbsObject = {burgers: data};
    console.dir(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a new burger
router.post("/api/burgers", function(req, res) {
  burger.createBurger(["burger_name", "devoured"], [req.body.name, false], function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

// Update a burger
router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateBurger(
  {devoured: req.body.devoured}, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect("/");
    }
  });
});

// Export routes for server.js to use.
module.exports = router;