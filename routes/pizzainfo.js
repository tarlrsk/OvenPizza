var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Pizzainfo = require("../db/models/pizzainfo");

/* GET customers listing. */
router.get("/", (req, res, next) => {
  Pizzainfo.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});

module.exports = router;