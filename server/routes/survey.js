let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

// connect to our Book Model
//let Book = require("../models/book");

let surveyController = require("../controllers/survey");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/", surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, surveyController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, surveyController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", requireAuth, surveyController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", requireAuth, surveyController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, surveyController.deletepage);

module.exports = router;