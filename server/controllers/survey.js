// Model of a survey
const Survey = require("../models/survey");

const homePage = (req, res) => {
    res.render("index", { title: "Home" });
    };

module.exports = {
    homePage,
};