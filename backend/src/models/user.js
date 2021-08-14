const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* user model */

//user schema that defines the entity
const userSchema = new mongoose.Schema({
    // define type, required (the most important)
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    hash_password: {
        type: String,
        required: true,
    }
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema);