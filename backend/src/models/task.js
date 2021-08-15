const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* user model */

//user schema that defines the entity
const taskSchema = new mongoose.Schema({
    // define type, required (the most important)
    parentId: {
        type: mongoose.ObjectId,
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

module.exports = mongoose.model('Task', taskSchema); //Export data formatting

/*
,
        trim: true,
        unique: true
*/