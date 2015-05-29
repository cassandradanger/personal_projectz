var express = require('express');
var router = express.Router();
var path = require('path');
var VendorSchema = require('../models/NewVendor.js');

console.log("index.js routes loaded #1")

/* GET home page. */
router.get('/', function(req, res, next) {
 res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

router.post("/", function(req, res, next){
 VendorSchema.create(req.body, function(err, post){
  res.redirect('/');
 })
});

console.log("index.js routes loaded #2")

module.exports = router;
