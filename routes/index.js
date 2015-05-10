var express = require('express');
var router = express.Router();

var fixtures= require("myscripts/fixtures.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fixture app', fixturelist:fixtures.getFixtures()});
});

module.exports = router;
