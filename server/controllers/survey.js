let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference to the model (dbschema )
let Survey = require("../models/survey");

module.exports.displaySurveyList = (req, res, next) => {
  Survey.find((err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(bookList);

      res.render("survey/list", {
        title: "Survey",
        SurveyList: surveyList,
        displayName: req.user ? req.user.displayName : "",
      });
      //render book.ejs and pass title and Booklist variable we are passing bookList object to BookList property
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("survey/add", {
    title: "Add Survey",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newSurvey = Survey({
    name: req.body.name,
    owner: req.body.owner,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
  });
  Survey.create(newSurvey, (err, Survey) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/survey-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Survey.findById(id, (err, surveytoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("survey/edit", {
        title: "Edit Survey",
        survey: surveytoedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatesurvey = Survey({
    _id: id,
    name: req.body.name,
    owner: req.body.owner,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
  });
  Survey.updateOne({ _id: id }, updatesurvey, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/survey-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Survey.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh book list
      res.redirect("/survey-list");
    }
  });
};

module.exports.answerpage = (req, res, next) => {
  let id = req.params.id;

  Survey.findById(id, (err, surveytoanswer) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("survey/answer", {
        title: "Answer Survey",
        survey: surveytoanswer,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });

}

module.exports.processinganswerpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let answersurvey = Survey({
    _id: id,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
  });
  Survey.updateOne({ _id: id }, answersurvey, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/survey-list");
    }
  });
};
