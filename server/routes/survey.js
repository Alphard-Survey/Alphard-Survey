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
//router.get("/add", requireAuth, surveyController.addpage);
router.get("/add", surveyController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
//router.post("/add", requireAuth, surveyController.addprocesspage);
router.post("/add", surveyController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
//router.get("/edit/:id", requireAuth, surveyController.displayeditpage);
router.get("/edit/:id", surveyController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
//router.post("/edit/:id", requireAuth, surveyController.processingeditpage);
router.post("/edit/:id", surveyController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
//router.get("/delete/:id", requireAuth, surveyController.deletepage);
router.get("/delete/:id", surveyController.deletepage);

/* GET Route for displaying the Answer page - READ Operation */
router.get("/answer/:id", surveyController.answerpage);

/* POST Route for displaying the Answer page - Update Operation */
router.post("/answer/:id", surveyController.processinganswerpage);

module.exports = router;
