let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let surveyModel = mongoose.Schema(
  {
    name: String,
    owner: String,
    startDate: String,
    endDate: String,
  },

  {
    collection: "survey",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Survey", surveyModel);
