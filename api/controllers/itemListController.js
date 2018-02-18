'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks'),
    Test = mongoose.model('Test');

exports.listAllItems = (req, res) => {
    Task.find({}, (err, item) => {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.createNewItem = (req, res) => {
    var newItem = new Task(req.body);
    newItem.save((err, item) => {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.getItem = (req, res) => {
    Task.findById(req.params.id, (err, item) =>  {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.updateItem = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, item) => {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.deleteItem = (req, res) => {
    Task.remove({
        _id: req.params.id
    }, (err, item) => {
        if (err)
            res.send(err);
        res.json({ message: 'Item has been successfully deleted' });
    });
};