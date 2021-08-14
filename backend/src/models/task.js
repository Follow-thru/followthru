const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* user model */

//user schema that defines the entity
const taskSchema = new mongoose.Schema({
    // define type, required (the most important)
    id: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    }
}); //I didn't include timestamp for get, hopefully that is okay

module.exports = mongoose.model('Task', taskSchema); //Export data formatting