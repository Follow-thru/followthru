const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* user model */

//user schema that defines the entity
const branchSchema = new mongoose.Schema({
    // define type, required (the most important)
    parentId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    due: {
        type: Number,
        required: false,
        default: 0,
    },
    priority: {
        type: Number,
        required: false,
        default: 0,
    },
    info: {
        type: String,
        required: false,
        default: "",
    }
}, { timestamps: true});

module.exports = mongoose.model('Branch', branchSchema); //Export data formatting

/*
    trim: true,
    unique: true
*/