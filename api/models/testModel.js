'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
        Created_date: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'test'
    });

module.exports = mongoose.model('Test', TestSchema);