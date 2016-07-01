var express = require('express');
var router = express.Router();
var ItemSchema = require('../models/NewItem.js');
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
    ItemSchema.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /todos/:id */
router.get('/', function(req, res, next) {
    ItemSchema.find({}, function (err, post) {
        if (err) return next(err);
        res.json(post);
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
    ItemSchema.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* EDIT /todos/:id */
router.post('/:id', function(req, res, next) {
    console.log("Edit on the server");
    console.log(req.params);
    //ItemSchema.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    //    if (err) return next(err);
    //    res.json(post);
    //});
});

console.log('items.js route loaded');

module.exports = router;