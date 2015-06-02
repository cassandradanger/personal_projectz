var express = require('express');
var router = express.Router();
var VendorSchema = require('../models/NewVendor.js');
var mongoose = require('mongoose');
var path = require('path');


///* GET /todos listing. */
//router.get('/', function(req, res, next) {
//    Todo.find(function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});

/* POST /todos */
router.post('/', function(req, res, next) {
    VendorSchema.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /todos/:id */
router.get('/', function(req, res, next) {
    VendorSchema.find({}, function (err, post) {
        if (err) return next(err);
        res.json(post);
        console.log(post);
    });
});
//
///* PUT /todos/:id */
//router.put('/:id', function(req, res, next) {
//    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    console.log("Delete");
    console.log(req.params);
    VendorSchema.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

console.log('vendors.js route loaded');

module.exports = router;