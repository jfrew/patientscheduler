//html pathing to three pages, defaults to the main schedule page
var path = require("path");

module.exports = function(app) {

  app.get("/unscheduled", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/unscheduled.html"));
  });

  app.get("/schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/schedule.html"));
  });

  app.get("/patiententry", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/patiententry.html"))
  })

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/schedule.html"));
  });
};
