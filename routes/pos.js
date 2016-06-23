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
//
///* POST /todos */
//router.post('/', function(req, res, next) {
//    ItemSchema.create(req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

/* GET /todos/:id */
router.get('/search/:id', function(req, res, next) {
    ItemSchema.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        console.log(post);
        console.log(req.params.id);
        console.log("THIS IS THE POS ROUTE");
        res.json(post);
    });
});

console.log('pos.js route loaded');

module.exports = router;