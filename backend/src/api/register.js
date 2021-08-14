const User = require('../models/user');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

let result = new response();

/* register controller */
module.exports = class registerController {
    static async apiPostTask(req, res, next) {
        // search if the user already exsisted (call findOne function)
        const user = await User.findOne({ username: req.body.username });
        result.connected = true;
        if (user !== null) {
            result.status = 400;
            result.errors.push('Username taken');
        }
        else{
            const { // get user info from request
                username,
                password
            } = req.body;
            // hash the password and create new User (using bcrypt library)
            const hash_password = await bcrypt.hash(password, 10)
            const newUser = new User({
                username,
                hash_password
            });
            // Push the data to DB asynchronously (call save() function and handle errors)
            await newUser.save().catch((errors) => {
                result.status = 400;
                result.errors.push(errors);
            }).then(() => { // Return the new user info if successful
                result.status = 201;
                result.response = newUser
            });
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
}