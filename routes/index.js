/*
var express = require('express');
var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['express'], function (express) {

  var router = express.Router();

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  return router;
});
