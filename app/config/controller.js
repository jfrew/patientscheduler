var express = require("express");

var router = express.Router();

var unsched = require("../models/unsched.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  unsched.all(function(data) {
    var hbsObject = {
      unsched: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  unsched.create([
    "firstName", "lastName", "email", "phone", "address", "apptDay", "apptTime"
  ], [
    req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.address, req.body.apptDay, req.body.apptTime
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  unsched.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    apptDay: req.body.apptDay,
    apptTime: req.body.apptTime
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  unsched.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
