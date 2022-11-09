const express = require("express");
const router = express.Router();

const { homepage } = require("../controllers/survey");

router.route("/").get((req, res) => {
  res.render("index", { title: "Home" });
});

module.exports = router;
