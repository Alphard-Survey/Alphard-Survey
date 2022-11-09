let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { stringify } = require("querystring");

//create a model class
let surveyModel = mongoose.Schema(
  {
    name: String,
    owner: String,
    startDate: String,
    endDate: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
  },

  {
    collection: "survey",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Survey", surveyModel);
