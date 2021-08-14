const User = require('../models/user');
const bcrypt = require('bcrypt');

/* register controller */
module.exports = class registerController {
    static async apiPostTask(req, res, next) {
        // search if the user already exsisted (call findOne function)
        const user = await User.findOne({ username: req.body.username });
        if (user !== null) {
            //handle errors and end the subroutine           
            res.status(400).json({
                error: 'Username taken',
            });
            return;
        }

        // get user info from request
        const {
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
        let success = true
        await newUser.save().catch((errors) => {
            success = false;
            res.status(400).json({ errors });
        });
        // Return the new user info if successful
        // else end the subroutine
        if (success) {
            res.status(201).json({ newUser });
        } else {
            return;
        }

    }
}